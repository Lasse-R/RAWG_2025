import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface GenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<GenreResponse>("/genre", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results)
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        return () => controller.abort();

    }, []);


    return { genres, error, loading };
};


export default useGenres;