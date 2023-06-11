(() => {
  interface Client {
    name: string;
    age: number;
    address: Address;
    // Interface no puede implementar un método
    // solamente establece como debe lucir el objeto
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "KY2",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.id;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      id: 354,
      zip: "SDF",
      city: "Toronto",
    },
    getFullAddress(id: string) {
      return this.address.id;
    },
  };
})();
