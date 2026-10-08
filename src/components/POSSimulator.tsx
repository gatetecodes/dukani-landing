"use client";

import React, { useState } from "react";
import { Info, X, Scan, ShoppingBag, Plus, Minus, CheckCircle2, RotateCcw } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  maxStock: number;
  category: string;
  sku: string;
}

const INITIAL_PRODUCTS: Product[] = [
  { id: "1", name: "Organic Beans", price: 12.50, stock: 12, maxStock: 150, category: "Grains", sku: "54101" },
  { id: "2", name: "Fresh Milk (1L)", price: 3.20, stock: 5, maxStock: 30, category: "Dairy", sku: "54102" },
  { id: "3", name: "Wheat Flour (2kg)", price: 8.99, stock: 2, maxStock: 50, category: "Baking", sku: "54103" }, // Low stock
  { id: "4", name: "Cooking Oil (1L)", price: 15.50, stock: 20, maxStock: 40, category: "Pantry", sku: "54104" },
  { id: "5", name: "Organic Honey", price: 18.00, stock: 1, maxStock: 15, category: "Spread", sku: "54105" }, // Critical low stock
  { id: "6", name: "Brown Sugar (1kg)", price: 4.50, stock: 14, maxStock: 60, category: "Baking", sku: "54106" },
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function POSSimulator() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cashReceived, setCashReceived] = useState<string>("");
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);
  const [lastReceipt, setLastReceipt] = useState<{
    items: { name: string; qty: number; total: number }[];
    subtotal: number;
    tax: number;
    total: number;
    cash: number;
    change: number;
    date: string;
    receiptNo: string;
  } | null>(null);
  const [scannerActive, setScannerActive] = useState<boolean>(false);
  const [scanMessage, setScanMessage] = useState<string>("");

  const addToCart = (product: Product) => {
    if (product.stock <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          alert(`Cannot add more. Only ${product.stock} items left in stock.`);
          return prevCart;
        }
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const simulateBarcodeScan = () => {
    setScannerActive(true);
    setScanMessage("Searching for barcode...");
    
    setTimeout(() => {
      const available = products.filter(p => p.stock > 0);
      if (available.length === 0) {
        setScanMessage("All items are out of stock!");
        setTimeout(() => setScannerActive(false), 1500);
        return;
      }
      const randomProduct = available[Math.floor(Math.random() * available.length)];
      addToCart(randomProduct);
      
      setScanMessage(`Beep! Scanned: ${randomProduct.name}`);
      setTimeout(() => {
        setScannerActive(false);
        setScanMessage("");
      }, 1200);
    }, 1500);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = cartSubtotal * 0.16; // 16% VAT
  const cartTotal = cartSubtotal + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const cash = parseFloat(cashReceived);
    if (isNaN(cash) || cash < cartTotal) {
      alert("Please enter a valid cash amount equal to or greater than the total.");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        const cartItem = cart.find((item) => item.product.id === p.id);
        if (cartItem) {
          return { ...p, stock: Math.max(0, p.stock - cartItem.quantity) };
        }
        return p;
      })
    );

    const receiptNo = `DKN-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleString();
    
    setLastReceipt({
      items: cart.map(item => ({
        name: item.product.name,
        qty: item.quantity,
        total: item.product.price * item.quantity
      })),
      subtotal: cartSubtotal,
      tax: tax,
      total: cartTotal,
      cash: cash,
      change: cash - cartTotal,
      date: now,
      receiptNo: receiptNo
    });

    setCheckoutComplete(true);
    setCart([]);
    setCashReceived("");
  };

  const resetSimulator = () => {
    setProducts(INITIAL_PRODUCTS);
    setCart([]);
    setCheckoutComplete(false);
    setLastReceipt(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white shadow-xl border border-secondary-300 grid grid-cols-1 md:grid-cols-12">
      
      {/* Product List Panel */}
      <div className="md:col-span-7 p-6 border-b md:border-b-0 md:border-r border-secondary-200 flex flex-col justify-between bg-canvas/30">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-xs uppercase font-bold text-primary-600 tracking-wider">Interactive POS Demo</span>
              <h3 className="text-xl font-bold text-neutral-800">Dukani Storefront</h3>
            </div>
            <button
              onClick={simulateBarcodeScan}
              disabled={scannerActive}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all duration-300 flex items-center gap-2 ${
                scannerActive 
                  ? "bg-neutral-600 text-neutral-100 cursor-not-allowed animate-pulse"
                  : "bg-primary-500 text-white hover:bg-primary-600 active:scale-95 cursor-pointer"
              }`}
            >
              <Scan className="w-4 h-4" />
              {scannerActive ? "Scanning..." : "Simulate Barcode Scan"}
            </button>
          </div>

          {scannerActive && (
            <div className="mb-4 p-3 bg-neutral-800 text-primary-200 rounded-xl text-center text-xs font-mono border border-primary-400 flex items-center justify-center gap-2 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping"></span>
              {scanMessage}
            </div>
          )}

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {products.map((product) => {
              const isLowStock = product.stock <= 3 && product.stock > 0;
              const isOutOfStock = product.stock === 0;
              
              return (
                <div
                  key={product.id}
                  onClick={() => !isOutOfStock && addToCart(product)}
                  className={`group relative p-4 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between select-none ${
                    isOutOfStock
                      ? "opacity-60 border-neutral-200 bg-neutral-50 cursor-not-allowed"
                      : "border-secondary-300 hover:border-primary-400 hover:shadow-md active:scale-[0.98]"
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-neutral-400 mb-1">
                    {product.category}
                  </span>

                  <h4 className="font-semibold text-neutral-800 text-sm group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h4>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-800">${product.price.toFixed(2)}</span>
                    
                    {isOutOfStock ? (
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-danger/10 text-danger border border-danger/20">
                        Sold Out
                      </span>
                    ) : isLowStock ? (
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-warning/10 text-warning border border-warning/20 animate-pulse">
                        Low Stock ({product.stock})
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded-md text-[9px] font-medium bg-tertiary-100 text-tertiary-700">
                        Qty: {product.stock}
                      </span>
                    )}
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0 group-active:opacity-100 transition-opacity duration-100 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Simulator Info Text */}
        <div className="mt-8 pt-4 border-t border-secondary-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-2 items-start max-w-sm">
            <Info className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-500 leading-relaxed">
              <strong>How it works:</strong> Click cards to add items. Notice the stock levels deduct in real-time on checkout, demonstrating Dukani's automated inventory sync.
            </p>
          </div>
          <button
            onClick={resetSimulator}
            className="text-xs text-neutral-500 hover:text-primary-600 font-semibold underline decoration-dotted transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Store Inventory
          </button>
        </div>
      </div>

      {/* Cart & Checkout Panel */}
      <div className="md:col-span-5 p-6 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-lg font-bold text-neutral-800 mb-4 pb-2 border-b border-secondary-200">
            Shopping Cart
          </h3>

          {cart.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 flex flex-col items-center justify-center gap-2">
              <ShoppingBag className="w-8 h-8 opacity-40 text-neutral-500 mb-1" />
              <p className="text-xs">Your cash register is empty.</p>
              <p className="text-[10px] text-neutral-400">Click products or run scanner simulation.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center py-2 border-b border-secondary-100 text-xs">
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="font-semibold text-neutral-800 truncate">{item.product.name}</p>
                    <p className="text-[10px] text-neutral-500">${item.product.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-5 h-5 flex items-center justify-center rounded bg-secondary-200 text-neutral-700 hover:bg-secondary-300 transition-colors cursor-pointer"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="font-mono font-bold text-neutral-800 w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item.product)}
                      className="w-5 h-5 flex items-center justify-center rounded bg-secondary-200 text-neutral-700 hover:bg-secondary-300 transition-colors cursor-pointer"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="w-16 text-right font-semibold font-mono text-neutral-800 pl-2">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pricing Summary */}
        <div className="mt-6 pt-4 border-t border-secondary-200">
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-neutral-500">
              <span>Subtotal</span>
              <span className="font-mono">${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>VAT (16%)</span>
              <span className="font-mono">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-neutral-800 text-sm pt-1.5 border-t border-dashed border-secondary-200">
              <span>Total Amount</span>
              <span className="font-mono text-primary-700">${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Form */}
          {cart.length > 0 && (
            <form onSubmit={handleCheckout} className="mt-4 space-y-3">
              <div>
                <label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1">
                  Cash Received ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-neutral-400 text-xs">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min={cartTotal}
                    required
                    value={cashReceived}
                    onChange={(e) => setCashReceived(e.target.value)}
                    placeholder={cartTotal.toFixed(2)}
                    className="w-full bg-canvas/30 border border-secondary-300 rounded-xl py-2 pl-7 pr-3 text-xs font-mono text-neutral-800 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-success text-white font-bold rounded-xl text-xs shadow-sm hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Complete Cash Sale
              </button>
            </form>
          )}

          {/* Receipt Modal */}
          {checkoutComplete && lastReceipt && (
            <div className="mt-4 p-4 bg-secondary-100 rounded-2xl border border-secondary-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[radial-gradient(circle_at_center,_#964d38_3px,_transparent_4px)] bg-[size:10px_10px]" />

              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-success flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success animate-bounce" />
                  Sale Recorded!
                </span>
                <button
                  onClick={() => setCheckoutComplete(false)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors p-1 hover:bg-secondary-200 rounded-lg cursor-pointer"
                  aria-label="Close receipt"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Thermal Receipt Paper */}
              <div className="bg-white p-4 rounded-xl border border-secondary-200 shadow-sm text-[11px] font-mono text-neutral-700 leading-relaxed max-w-xs mx-auto">
                <div className="text-center border-b border-dashed border-neutral-300 pb-3">
                  <h4 className="font-extrabold text-sm text-neutral-800 uppercase tracking-wide">Dukani Mart</h4>
                  <p className="text-[9px] text-neutral-500">Retail & Inventory POS System</p>
                  <p className="text-[8px] text-neutral-400 mt-1">Receipt: {lastReceipt.receiptNo}</p>
                  <p className="text-[8px] text-neutral-400">{lastReceipt.date}</p>
                </div>

                <div className="py-3 border-b border-dashed border-neutral-300 space-y-1">
                  {lastReceipt.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="truncate max-w-[130px]">{item.name} x{item.qty}</span>
                      <span>${item.total.toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="py-2 space-y-0.5 text-right text-[10px]">
                  <div className="flex justify-between text-neutral-500">
                    <span>Subtotal</span>
                    <span>${lastReceipt.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>VAT (16%)</span>
                    <span>${lastReceipt.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-neutral-800 text-[11px] pt-1 mt-1 border-t border-neutral-200">
                    <span>TOTAL</span>
                    <span>${lastReceipt.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200 text-right text-[9px] text-neutral-500">
                  <div className="flex justify-between">
                    <span>Cash Paid</span>
                    <span>${lastReceipt.cash.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-neutral-800 text-[10px] mt-0.5">
                    <span>Change Due</span>
                    <span>${lastReceipt.change.toFixed(2)}</span>
                  </div>
                </div>

                <div className="text-center mt-4 pt-3 border-t border-dashed border-neutral-300 text-[8px] text-neutral-400 space-y-1">
                  <p>THANK YOU FOR YOUR PATRONAGE</p>
                  <div className="w-full h-8 bg-[repeating-linear-gradient(90deg,_#333,_#333_2px,_transparent_2px,_transparent_6px)] opacity-30 mt-2 mx-auto max-w-[120px]" />
                  <p className="text-[7px] text-neutral-400 select-none mt-1">Powered by Dukani Mobile POS</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
