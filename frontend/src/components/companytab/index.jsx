import './index.css';

const CompanyTab=({prop})=>{
    return (
   <div className='companytabcontainer'>
    <img src={prop.image} width="80" height="80"/>
      <section className='tabinfo'>
         <h2>{prop.title}</h2>
         <h3>{prop.reviews}:reviews</h3>
         <span className='tabbtns'>
            {prop.btns.map((element,index)=>(
              <button key={index}>{element}</button>
            )
            )}
         </span>
      </section>
   </div>)
}


export default CompanyTab;