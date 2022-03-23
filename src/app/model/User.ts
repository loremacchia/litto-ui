import { Plan } from './Plan';
import { Interest } from './Interest';
export class User {
  id!: string;
  username!: string;
  email!: string;
  password!: string;
  bio!: string;
  name!: string;
  surname!: string;
  interests!: Interest[];
  plans!: Plan[];
  imageUrl!: string;
  level!: number;

  constructor() {}

  setItems(
    id: string,
    username: string,
    email: string,
    password: string,
    bio: string,
    name: string,
    surname: string,
    interests: Interest[],
    plans: Plan[],
    imageUrl: string,
    level: number
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.bio = bio;
    this.name = name;
    this.surname = surname;
    this.interests = interests;
    this.plans = plans;
    this.imageUrl = imageUrl;
    this.level = level;
  }
}
