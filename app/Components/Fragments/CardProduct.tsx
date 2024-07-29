import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ELements/Button";

interface CardProductProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
}

interface BodyProps {
  children: string;
  name: string;
}

interface FooterProps {
  price: number;
  id: number;
  handleAddToCart: (id: number) => void;
}

interface CardProductComponent extends React.FC<CardProductProps> {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
}

const CardProduct: CardProductComponent = ({ children }) => {
  return (
    <div className="w-[280px] rounded-xl border border-black shadow bg-white m-2">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image }) => {
  return (
    <Link href={"#"}>
      <Image
        src={image}
        alt="shoes1"
        width={320}
        height={0}
        className="p-5"
        priority
      />
    </Link>
  );
};

const Body: React.FC<BodyProps> = ({ children, name }) => {
  return (
    <div className="p-5 min-h-[200px]">
      <Link href={"#"}>
        <h5 className="text-xl font-bold text-black tracking-tight">{name}</h5>
        <p className="text-sm text-black">{children}</p>
      </Link>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ price, id, handleAddToCart }) => {
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <span className="font-bold text-black">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
      <Link href={"#"}>
        <Button classname="bg-black" onClick={() => handleAddToCart(id)}>
          Add To Cart
        </Button>
      </Link>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
