
import image from "../assets/image.png"
export  const PageNotFound = () => {
  return (
   <main>
    <section>
      <div className=" flex text-7xl">
<p>404!<br /> oops Page not found </p>
<img src={image} className="mr-80 px-15" />

      </div>
     
    </section>
   </main>
  )
}


