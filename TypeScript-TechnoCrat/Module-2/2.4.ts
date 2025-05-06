{
    // Generic interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }


    interface OraimoWatch {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<OraimoWatch, null> = {
        name: 'Gorib Manush',
        computer: {
            brand: 'HP',
            model: 'hp237',
            releaseYear: 2025,
        },
        smartWatch: {
            brand: 'Oraimo',
            model: 'Or38',
            display: 'OLED'
        },
    }

    type AppleWatch = {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Borolox Manush',
        computer: {
            brand: 'Apple',
            model: 'Apple237',
            releaseYear: 2025,
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'A38',
            display: 'OLED',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'yamaha',
            engineCapacity: '100cc'
        }
    }



}
