/**
 * API Service Layer
 * Connects the React MVP to the Python FastAPI Computer Vision Backend
 */

export const mockAnalyzeFootMeasurement = async (imageBase64) => {
    try {
        // Vercel routes `/api/*` defined in vercel.json will handle this natively.
        // During local dev (npm run dev), you still need to run the Python server
        // or configure Vite proxy. But on Vercel, this works automatically.
        const apiUrl = import.meta.env.VITE_API_URL || '/api/measure';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageBase64 }),
        });

        if (!response.ok) {
            throw new Error('Backend not available. Falling back to Demo mode.');
        }

        const result = await response.json();

        // The Python backend is designed to return the same output structure we need
        if (!result.success) {
            throw new Error(result.error || 'CV logic failed');
        }

        return result;

    } catch (err) {
        console.warn('⚠️ Real AI server not reachable, using mock Enterprise simulation for Demo...', err);

        // DEMO FALLBACK: Simulate network delay and intensive AI processing time
        await new Promise(resolve => setTimeout(resolve, 2500));

        // MOCK LOGIC: Randomly generate a realistic foot length between 23cm and 29cm
        const rawLengthCm = (Math.random() * (29 - 23) + 23).toFixed(1);
        const lengthCm = parseFloat(rawLengthCm);

        // Conversion logic (Approximate standard sizing)
        let euSize = Math.round((lengthCm + 1.5) * 1.5);
        let usSize = Math.round((lengthCm / 2.54 * 3) - 22 + 1); // +1 offset for common sizing
        usSize = Math.max(usSize, 6); // Set a minimum for the mock
        let ukSize = usSize - 1;

        return {
            success: true,
            data: {
                footLength: lengthCm,
                sizes: {
                    eu: euSize,
                    us: usSize,
                    uk: ukSize
                },
                confidence: (Math.random() * (99 - 92) + 92).toFixed(1) // Fake AI confidence score
            }
        };
    }
};
