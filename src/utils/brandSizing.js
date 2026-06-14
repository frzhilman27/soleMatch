// A utility to convert foot length (cm) to brand-specific shoe sizes.
// Note: These are approximate standard conversions often used in footwear.

export const calculateBrandSizes = (cmLength, gender = 'M') => {
    // Add small clearance (e.g. 0.5 - 1.0 cm) for the shoe inside
    const adjustedLength = cmLength + 0.5;
    
    // Base generic size logic (estimation)
    const getBaseSize = (offset, cm) => {
        let size = (cm - 24) * 1.5 + offset;
        // Round to nearest 0.5
        return Math.max(4, Math.round(size * 2) / 2);
    };

    const isMen = gender === 'M';

    return {
        Generic: {
            EU: Math.round((cmLength + 1.5) * 1.5),
            US: isMen ? getBaseSize(6, adjustedLength) : getBaseSize(7, adjustedLength),
            UK: isMen ? getBaseSize(5.5, adjustedLength) : getBaseSize(5, adjustedLength),
        },
        Brands: [
            {
                name: "Nike",
                size: isMen ? getBaseSize(6, adjustedLength) : getBaseSize(7.5, adjustedLength),
                fit: "True to Size"
            },
            {
                name: "Adidas",
                size: isMen ? getBaseSize(6.5, adjustedLength) : getBaseSize(7.5, adjustedLength),
                fit: "Runs slightly large"
            },
            {
                name: "New Balance",
                size: isMen ? getBaseSize(6, adjustedLength) : getBaseSize(7, adjustedLength),
                fit: "Wide toe box"
            },
            {
                name: "Puma",
                size: isMen ? getBaseSize(6, adjustedLength) : getBaseSize(7.5, adjustedLength),
                fit: "Runs narrow"
            },
            {
                name: "Vans",
                size: isMen ? getBaseSize(6.5, adjustedLength) : getBaseSize(8, adjustedLength),
                fit: "Runs large"
            }
        ]
    };
};
