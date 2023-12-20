import titleStyle from '../src/app/css/sectionTitle.module.css';
export default function SectionTitle ({title, titleDesc}){
    return (
        <div className={titleStyle.title}>
            <h2 className={titleStyle.title_name}>{title}</h2>
            {titleDesc && <p className={titleStyle.title_desc}>{titleDesc}</p>}
        </div>
    );
}