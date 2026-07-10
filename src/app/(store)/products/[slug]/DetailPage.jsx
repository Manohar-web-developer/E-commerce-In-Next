"use client";
import { useParams } from 'next/navigation';


function DetailPage() {
  const {slug} = useParams();
    console.log(slug);
    
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage