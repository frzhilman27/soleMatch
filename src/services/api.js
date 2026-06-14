/**
 * API Service Layer
 * Connects the React MVP to the Python FastAPI Computer Vision Backend
 */

export const analyzeFootMeasurement = async (imageBase64) => {
    try {
        // Use environment variable or fallback to the known backend URL on Vercel
        const apiUrl = import.meta.env.VITE_API_URL || 'https://solmatch-backend.vercel.app/api/measure';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageBase64 }),
        });

        if (!response.ok) {
            throw new Error('Gagal terhubung ke Server AI. Pastikan internet Anda stabil.');
        }

        const result = await response.json();

        // The Python backend returns a success flag
        if (!result.success) {
            // Throw the explicit error from Python OpenCV so the UI can display it
            throw new Error(result.error || 'AI gagal mendeteksi kertas A4. Pastikan pencahayaan cukup dan kertas utuh.');
        }

        return result;

    } catch (err) {
        console.error('API Error:', err);
        // Rethrow so the Measure component can catch and display the error message on screen
        throw err;
    }
};

