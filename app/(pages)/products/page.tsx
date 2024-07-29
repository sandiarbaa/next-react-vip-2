"use client";
import Button from "@/app/Components/ELements/Button";
import CardProduct from "@/app/Components/Fragments/CardProduct";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useRef, useState } from "react";

interface productsProps {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const products: productsProps[] = [
  {
    id: 1,
    name: "Shoes 1",
    image: "/assets/images/shoes1.jpg",
    price: 1000000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione ipsum quos soluta voluptatum temporibus, commodi enim voluptate laborum incidunt a neque ab voluptatibus nihil. Est ipsa officiis ipsum error.",
  },
  {
    id: 2,
    name: "Shoes 2",
    image: "/assets/images/shoes1.jpg",
    price: 500000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione ipsum quos soluta voluptatum temporibus.",
  },
  {
    id: 3,
    name: "Shoes 3",
    image: "/assets/images/shoes1.jpg",
    price: 5000000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione ipsum quos soluta voluptatum temporibus.",
  },
];

const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    router.push("/login");
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleAddToCart = (id: number) => {
    // kalau sudah ada item dengan id yg sama di cart nya | kalau product yg di klik id nya sudah ada di cart
    if (cart.find((item) => item.id === id)) {
      setCart(
        // kalau ada item dengan id yang sama di cart, tambah qty nya, tapi kalau id nya berbeda maka item nya tidak akan diubah-ubah jadi apa yg ada di dalam cart nya dibiarkan saja
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // kalau id nya berbeda, maka masukan item baru ke cart
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      setCart([{ id: 1, qty: 1 }]);
    } else {
      // setCart(JSON.parse(localStorage.getItem("cart") || []));
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart)); // parse untuk mengubah data yg tadinya string dari localstorage, menjadi javascript object
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // kalau sudah ada data di cart nya
    if (cart.length > 0) {
      // mencari total price dengan mengkalkulasikan price dengan qty dari setiap baris data cart
      const sum = cart.reduce((acc, item) => {
        // ini mencari dulu product nya, karena di cart hanya ada id dan qty, belum ada price, untuk mendapatkan price nya makanya harus mencari dulu dari array products
        const product = products.find((product) => product.id === item.id);
        // kalau product ada, maka hitung price nya dengan dikalikan sama qty nya
        if (product) {
          return acc + product.price * item.qty;
        }
        // kalau product ga ada, return acc (0)
        return acc;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart)); // masukan data cart ke dalam localstorage, setelah ada perubahan di state cart
      // stringify digunakan untuk mengubah data javascript object ke string
    }
  }, [cart]);

  // useRef
  // const cartRef = useRef<{ id: number; qty: number }[]>([
  //   {
  //     id: 1,
  //     qty: 1,
  //   },
  // ]);
  const cartRef = useRef<{ id: number; qty: number }[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  // useRef bisa menyimpan nilai seperti useState, tetapi tidak re-render, dan state updater nya menggunakan current
  const handleAddToCartRef = (id: number) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef<HTMLTableRowElement>(null);
  // console.log(totalPriceRef)

  useEffect(() => {
    if(totalPriceRef.current) {
      if(cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none"
      }
    }
  }, [cart]);

  return (
    <section className="overflow-x-hidden">
      <div
        id="navbar"
        className="bg-white border border-black shadow text-white font-bold text-sm py-2 text-end px-5"
      >
        <span className="text-black">{email}</span>
        <Button classname="bg-black ml-3" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <section className="w-full">
        <div
          id="container-2-div"
          className="flex flex-col md:flex-row justify-center items-center md:justify-center md:items-start"
        >
          <div className="w-full max-w-4xl order-2 md:order-1 flex flex-col md:flex-row justify-center items-center">
            {products.map((product, index) => (
              <CardProduct key={index}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
          </div>

          <div className="w-full max-w-xs order-1 md:order-2">
            <h1 className="font-bold text-2xl py-1.5 ml-3">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-2 text-sm">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  if (!product) return null;
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
                {/* Total Price */}
                <tr ref={totalPriceRef} className="font-bold">
                  <td colSpan={3}>Total Price</td>
                  <td>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductsPage;
