interface Image {
  mobile: string;
  tablet: string;
  desktop?: string | undefined;
}

interface Product {
  quantity: number;
  id: number;
  name: string;
  category: string;
  new: boolean;
  image: Image;
  description: string;
  slug: string;
  price: number;
}

interface MyContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  showCartBox: boolean;
  setShowCartBox: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
  localCount: number;
  setLocalCount: React.Dispatch<React.SetStateAction<number>>;
}

