import {Link} from 'react-router-dom'; import ProductCard from './ProductCard';
export default function Section({title,products,link=true}){return <section className="section"><div className="section-head"><h2>{title}</h2>{link&&<Link to="/products">View All →</Link>}</div><div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>}
