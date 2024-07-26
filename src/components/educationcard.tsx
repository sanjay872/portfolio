
interface Props{
    school: string;
    course: string;
    startYear: string;
    endYear: string;
    grade: string;
    description?: string;
}

function EducationCard({school, course, startYear, endYear, grade, description}: Props){
    return(
        <div className="flex flex-col border-b-2 bg-primary text-primary-foreground rounded-lg p-5 gap-4">
            <div className="font-bold text-xl">{school}</div>
            <div>{course}</div>
            <div>{startYear} - {endYear}</div>
            <div>Grade: {grade}</div>
            {description && <div>{description}</div>}
        </div>
    )
}
export default EducationCard;