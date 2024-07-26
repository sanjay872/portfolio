
interface Props{
    title:string;
    startDate:string;
    endDate:string;
    description:string;
    location?:string;
    mode?:string;
    type?:string;
    company:string;
    skills:string[];
}

function ExperienceCard({title,startDate,endDate,description,location,mode,type,company,skills}:Props){
    return(
        <div className="w-full flex flex-col border-b-2 bg-primary text-primary-foreground rounded-lg p-5 gap-4">
            <div className="font-bold text-xl">{title}</div>
            <div className="font-bold">{company} {type?"|":""} {type}</div>
            <div>{startDate} - {endDate}</div>
            <div>{location} {mode?"|":""} {mode}</div>
            <p>{description}</p>
            <div>
                {skills.map(skill => (
                    <span className='bg-primary-foreground text-sm text-primary p-2 mr-1 rounded-full' key={skill}>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard;