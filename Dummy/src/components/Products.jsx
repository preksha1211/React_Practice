export default function Products({skills}){
     return(
        <div>
            {skills.map((skill)=>(
                <p>{skill}</p>
            ))}
           
        </div>
     )
}