import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs, faPython, faReact, faTypescript } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"


const LIST_SKILLS_DATA = [
	{
		name: 'TypeScript',
		icon: <FontAwesomeIcon icon={faTypescript} />
	},
	{
		name: 'JavaScript',
		icon: <FontAwesomeIcon icon={faJs} className="text-white" />
	},
	{
		name: 'Python',
		icon: <FontAwesomeIcon icon={faPython} />
	},
	{
		name: 'React',
		icon: <FontAwesomeIcon icon={faReact} />
	},
	{
		name: "SQL",
		icon: <FontAwesomeIcon icon={faDatabase} />
	},
]

function SkillList() {
	return (
		<div className="w-fit mx-auto flex flex-wrap justify-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
			{
				LIST_SKILLS_DATA.map((skill) => (
					<div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
						<div className="size-4 flex items-center justify-center">
							{skill.icon}
						</div>
						<span>{skill.name}</span>
					</div>
				))
			}
		</div>
	)
}

export default SkillList
