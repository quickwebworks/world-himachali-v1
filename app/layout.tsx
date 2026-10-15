import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'World Himachali Organization | Connected by Roots', description: 'Connecting Himachalis across the world. Explore our heritage, community, events and membership.', icons:{icon:'/images/logo.jpg'} };
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
