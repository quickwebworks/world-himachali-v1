import Website from '../../components/Website';
import {notFound} from 'next/navigation';
import stories from '../../lib/stories.json';
import {nav} from '../../lib/data';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(![...nav.map(n=>n[1]),'join-us-membership',...Object.keys(stories)].includes(slug))notFound();return <Website page={slug}/>}
