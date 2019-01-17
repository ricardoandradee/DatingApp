import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    knownAs: string;
    age: number;
    gender: string;
    created: DataCue;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    lookingFor?: string;
    introduction?: string;
    photos?: Photo[];
}
