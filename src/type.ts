export type User = {
  id: number;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;
};

type Geo = {
  lat: number;
  lng: number;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
