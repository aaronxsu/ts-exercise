const profile = {
  name: "Aaron",
  age: 25,
  coords: {
    lat: 0,
    lng: 0
  },
  updateAge(age: number): void {
    this.age = age;
  }
};

const { name: userName, age }: { name: string; age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
