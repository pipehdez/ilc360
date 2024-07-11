interface InputProps {
    label?: string
    type?: string
    value: string
    name?: string
    onChange: (value: string) => void
}

const Input = ({ label,name,type,value,onChange }: InputProps) => (
    <div className="
    flex
    flex-col
    md:mb-6
    w-full
  ">
        {label && <label className=" 
      text-sm
      font-semibold
      mb-2
    ">{label}</label>}
        <input
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-transparent border-b-2 rounded-md shadow-sm focus:outline-none px-4 py-2"
        />
    </div>
)

const Textarea = ({ value,onChange }: InputProps) => (
    <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b-2 rounded-md shadow-sm border-none focus:outline-none"
    />
)

export { Input,Textarea }