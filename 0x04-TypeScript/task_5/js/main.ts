interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}

const subject1Major: MajorCredits = { credits: 3, brand: "Mathematics" };
const subject2Major: MajorCredits = { credits: 4, brand: "Physics" };

const subject1Minor: MinorCredits = { credits: 2, brand: "History" };
const subject2Minor: MinorCredits = { credits: 2, brand: "Literature" };

console.log(sumMajorCredits(subject1Major, subject2Major)); 
console.log(sumMinorCredits(subject1Minor, subject2Minor)); 
