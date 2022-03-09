interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  store: string;
}

interface IUserData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}
