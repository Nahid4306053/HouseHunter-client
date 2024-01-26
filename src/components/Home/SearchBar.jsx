/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


export default function SearchBar() {
const {pathname,search} = useLocation();
const [SearchParams,setSearchParams] = useSearchParams();
const cityref = useRef();
const nameref = useRef();
const navigate = useNavigate();

const City = [ "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Cox's Bazar", "Sylhet", "Barisal", "Comilla", "Narayanganj", "Gazipur", "Mymensingh", "Jessore", "Tangail", "Rangpur", "Bogra", "Dinajpur", "Narsingdi", "Rangamati", "Feni", "Jamalpur", "Kushtia", "Moulvibazar", "Bagerhat", "Pabna", "Faridpur", "Panchagarh", "Patuakhali", "Kishoreganj", "Satkhira", "Madaripur", "Sherpur", "Thakurgaon", "Magura", "Natore", "Joypurhat", "Chandpur", "Lakshmipur", "Lalmonirhat", "Jhalokathi", "Bhola", "Manikganj", "Munshiganj", "Netrakona", "Habiganj", "Noakhali", "Brahmanbaria", "Chapainawabganj", "Chuadanga", "Habiganj", "Jhenaidah", "Nilphamari", "Shariatpur", "Sirajganj", "Sunamganj", "Mehendiganj", "Nawabganj", "Meherpur", "Chilmari", "Rupganj", "Mongla" ];

  const handelSerachData = (form) => { 
    form.preventDefault();   
   
    const city = form.target.city.value.trim();   
 
    const name = form.target.name.value.trim(); 
   if(pathname !== '/house'){   
     navigate(`/house/?${city && "city="+ city} ${name && (city ? "&" : "") + "name="+ name}`) 
   }
   else{
      if(city){
        setSearchParams(old=>
          {
           old.set("city",city)
           return old;
          })
      } 
      if(name){
        setSearchParams(old=> {
          old.set("name",name)
          return old;
        })
      }
   }
  } 
  
  useEffect(()=>{
    if(!SearchParams.get('name')){
      nameref.current.value = SearchParams.get('name');
    } 
    else{ 
         setSearchParams(old=>
        {
         old.delete("city")
         return old;
        })
    }
    if(SearchParams.get('city')){
      cityref.current.value = SearchParams.get('city');
    }
    else{ 
       setSearchParams(old=> {
        old.delete("name")
        return old;
      })
      cityref.current.value = '';
    }
  },[search])
  return (
    <form onSubmit={handelSerachData} className="join">
      <div>
        <div>
          <input ref={nameref} name="name" defaultValue={SearchParams.get('name')} className="input input-bordered bg-[#00000046] text-white join-item" placeholder="Search By House Name" />
        </div>
      </div>
      <select ref={cityref} name="city" defaultValue={SearchParams.get('city')} className="select bg-[#00000046] text-white select-bordered join-item">
        <option value={''}> Locations </option>
          {City.map((ele,ind)=>{
            return <option value={ele} key={ind}>{ele}</option>
          },[])}
      </select>
      <div className="indicator"> 
        <button className="btn join-item">Search</button>
      </div>
    </form>
  );
}
