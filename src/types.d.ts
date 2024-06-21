interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  new: boolean;
  image: Image;
  description: string;
}

interface MyContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}