'use client'
import { getCurriculum,saveCurriculum,updateCurriculum } from '@/actions/curriculum'
import { getUserInfo } from '@/actions/register'
import { Input,Textarea } from '@/components/inputs'
import mongoose,{ set } from 'mongoose'
import React,{ FormEvent,useEffect,useRef,useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Resume = () => {
    // get current id user from session
    const { data: session } = useSession()
    const router = useRouter()
    const ref = useRef<HTMLFormElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [hasProfile,setHasProfile] = useState(false)
    const [updated,setUpdated] = useState(false)
    const [created,setCreated] = useState(false)
    const [error,setError] = useState('')

    //  form
    const [name,setName] = useState('')
    const [jobTitle,setJobTitle] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [country,setCountry] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [newSkills,setNewSkills] = useState({
        name: ''
    })
    const [profileDescription,setProfileDescription] = useState('')
    const [newEmploymentHistory,setNewEmploymentHistory] = useState({
        position: '',
        period: '',
        responsibilities: [
            ''
        ],
    })
    const [newEmploymentHistoryResponsabilities,setNewEmploymentHistoryResponsabilities] = useState({
        name: ''
    })
    const [newEducation,setNewEducation] = useState({
        degree: '',
        period: '',
        description: '',
    })
    const [newReference,setNewReference] = useState({
        name: '',
        contact: '',
    })

    const [profile,setProfile] = useState({
        name: '',
        jobTitle: '',
        address: '',
        city: '',
        country: '',
        phone: '',
        email: '',
        skills: [
            {
                name: ''
            }
        ],
        profileDescription: '',
        employmentHistory: [
            {
                position: '',
                period: '',
                responsibilities: [
                    ''
                ],
            },
        ],
        education: [
            {
                degree: '',
                period: '',
                description: '',
            },
        ],
        references: [
            {
                name: '',
                contact: '',
            }
        ],
    })

    const curriculumOptain = async (email: string | undefined | null) => {
        const r = await getCurriculum(email as string)
        console.log('curriculum',{ r })
        // validar si viene vacio 
        if (!r || r.length === 0) {
            return
        }
        setHasProfile(true)
        setProfile(r)
    }


    useEffect(() => {
        if (session) {
            curriculumOptain(session?.user?.email)
        }
    },[session,hasProfile])



    const handleProfileChange = (field: string,value: string) => {
        setProfile({ ...profile,[field]: value })
    }

    const handleSkillChange = (index: number,field: keyof typeof profile.skills[0],value: string) => {
        const newSkills = Array.isArray(profile?.skills) ? [...profile.skills] : [] // const newSkills = [...profile?.skills]
        newSkills[index] = { ...newSkills[index],[field]: value } // newSkills[index][field] = value
        setProfile({ ...profile,skills: newSkills })
    }

    const handleEmploymentChange = (index: number,field: keyof typeof profile.employmentHistory[0],value: string) => {
        const newEmployment = [...profile.employmentHistory]
        // @ts-ignore
        newEmployment[index][field] = value as string
        setProfile({ ...profile,employmentHistory: newEmployment })
    }

    const handleResponsibilityChange = (empIndex: number,resIndex: number,value: string) => {
        const newEmployment = [...profile.employmentHistory]
        newEmployment[empIndex].responsibilities[resIndex] = value
        setProfile({ ...profile,employmentHistory: newEmployment })
    }

    const handleEducationChange = (index: number,field: keyof typeof profile.education[0],value: string) => {
        const newEducation = [...profile.education]
        newEducation[index][field] = value
        setProfile({ ...profile,education: newEducation })
    }

    const handleReferenceChange = (index: number,field: keyof typeof profile.references[0],value: string) => {
        const newReferences = [...profile.references]
        newReferences[index][field] = value
        setProfile({ ...profile,references: newReferences })
    }

    const addNewSkill = () => {
        setProfile({
            ...profile,skills: [
                ...profile?.skills ?? [],
                newSkills
            ]
        })
        setNewSkills({ name: '' })
    }

    const addNewEmployment = () => {
        setProfile({
            ...profile,employmentHistory: [
                ...profile?.employmentHistory ?? [],
                newEmploymentHistory
            ]
        })
        setNewEmploymentHistory({
            position: '',
            period: '',
            responsibilities: [
                ''
            ],
        })
    }

    const addNewEmploymentResponsabilities = (index: number) => {
        const newEmployment = [...profile.employmentHistory]
        newEmployment[index].responsibilities.push(newEmploymentHistoryResponsabilities.name)
        setProfile({ ...profile,employmentHistory: newEmployment })
        setNewEmploymentHistoryResponsabilities({ name: '' })
    }

    const addNewEducation = () => {
        setProfile({
            ...profile,education: [
                ...profile?.education ?? [],
                newEducation
            ]
        })
        setNewEducation({
            degree: '',
            period: '',
            description: '',
        })
    }

    const addNewReference = () => {
        setProfile({
            ...profile,references: [
                ...profile?.references ?? [],
                newReference
            ]
        })
        setNewReference({
            name: '',
            contact: '',
        })
    }



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        console.log('formData',{
            name: formData.get('name'),
            jobTitle: formData.get('jobTitle'),
            address: formData.get('address'),
            city: formData.get('city'),
            country: formData.get('country'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            skills: profile.skills,
            profileDescription: formData.get('profileDescription'),
            employmentHistory: profile.employmentHistory,
            education: profile.education,
            references: profile.references,
        })
        console.log('hasProfile',hasProfile)

        const values = {
            name: formData.get('name'),
            jobTitle: formData.get('jobTitle'),
            address: formData.get('address'),
            city: formData.get('city'),
            country: formData.get('country'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            skills: profile.skills,
            profileDescription: formData.get('profileDescription'),
            employmentHistory: profile.employmentHistory,
            education: profile.education,
            references: profile.references,
        }

        // Validación de campos requeridos
        const requiredFields = ['name','jobTitle','address','city','country','phone','email','profileDescription']
        const missingField = requiredFields.find((field) => !values[field]);

        if (missingField || !profile.skills || !profile.employmentHistory || !profile.education || !profile.references) {
            // setError('Todos los campos son requeridos');
            return
        }
 

        let r = null
        

        if (!hasProfile) {
            r = saveCurriculum(values,session?.user?.email as string)
            setCreated(true)
        } else {
            r = updateCurriculum(values,session?.user?.email as string)
            setUpdated(true)

        }

        console.log('r',r)

        ref.current?.reset()

        // @ts-ignore
        if (r?.error) {
            // @ts-ignore
            setError(r.error)
        }

        setTimeout(() => {
            setError('')
            setCreated(false)
            setUpdated(false)
        },3000)
    }

    return (
        <>
            {error !== '' &&
                <div className="bg-red-500 text-white p-8">
                    {error}
                </div>
            }
            {
                created && (
                    <div className="bg-green-500 text-white p-8">
                        Perfil creado
                    </div>
                )
            }
            {
                updated && (
                    <div className="bg-green-500 text-white p-8">
                        Perfil actualizado
                    </div>
                )
            }
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row bg-gray-100 p-8 md:p-16"
                id="resume"
            >
                <div className="bg-blue-800 text-white p-8 md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                    {/* <input type='text' name='id' value={} hidden /> */}
                    <Input
                        label='Nombre'
                        name='name'
                        type="text"
                        value={name || profile?.name}
                        onChange={(value) => setName(value)}
                    />
                    <Input
                        label='Profesión'
                        name='jobTitle'
                        type="text"
                        value={jobTitle || profile?.jobTitle}
                        onChange={(value) => setJobTitle(value)}
                    />

                    <h3 className="text-2xl font-semibold mb-2">Detalles</h3>
                    <Input
                        label='Dirección'
                        name='address'
                        type="text"
                        value={address || profile?.address}
                        onChange={(value) => setAddress(value)}
                    />
                    <Input
                        label='Ciudad'
                        name='city'
                        type="text"
                        value={city || profile?.city}
                        onChange={(value) => setCity(value)}
                    />
                    <Input
                        label='País'
                        name='country'
                        type="text"
                        value={country || profile?.country}
                        onChange={(value) => setCountry(value)}
                    />
                    <Input
                        label='Teléfono o Celular'
                        name='phone'
                        type="text"
                        value={phone || profile?.phone}
                        onChange={(value) => setPhone(value)}
                    />
                    <Input
                        label='Correo electrónico'
                        name='email'
                        type="text"
                        value={email || profile?.email}
                        onChange={(value) => setEmail(value)}
                    />

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Habilidades</h3>
                    <ul>
                        {profile?.skills?.map((skill,index) => (
                            <li key={index}>
                                <Input
                                    type="text"
                                    value={skill?.name || profile?.skills[index]?.name}
                                    onChange={(value) => handleSkillChange(index,'name',value)}
                                />
                            </li>
                        ))}
                    </ul>
                    <button ref={buttonRef} onClick={() => addNewSkill()}>Agregar Habilidad</button>
                    {/* alternativa al boton para agregar campo de skills  */}
                    
                </div>

                <div className="bg-white p-8 md:w-2/3 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                    <h3 className="text-2xl font-bold mb-4">Perfil</h3>
                    <Textarea
                        name='profileDescription'
                        value={profileDescription || profile?.profileDescription}
                        onChange={(value) => setProfileDescription(value)}
                    />

                    <h3 className="text-2xl font-bold mt-8 mb-4">Experiencia Laboral</h3>
                    {profile?.employmentHistory?.map((job,index) => (
                        <div key={index} className="
                        mb-4
                        background-color: #f9f9f9;
                        last:border-b-0
                        border-b-2
                        border-b-blue-500/20
                        ">
                            <Input
                                label='Posición'
                                type="text"
                                value={job?.position || profile?.employmentHistory[index]?.position}
                                onChange={(value) => handleEmploymentChange(index,'position',value)}
                            />
                            <Input
                                label='Periodo'
                                type="text"
                                value={job?.period || profile?.employmentHistory[index]?.period}
                                onChange={(value) => handleEmploymentChange(index,'period',value)}
                            />
                            <ul className="list-disc list-inside">
                                <h3 className="text-sm font-semibold mt-6 mb-2 text-gray-500">Agrega tus responsabilidades</h3>
                                {job?.responsibilities.map((responsibility,resIndex) => (
                                    <div key={resIndex}>
                                        <Input
                                            type="text"
                                            value={responsibility || profile?.employmentHistory[index]?.responsibilities[resIndex]}
                                            onChange={(value) => handleResponsibilityChange(index,resIndex,value)}
                                        />
                                        {
                                            resIndex === job.responsibilities.length - 1 && (
                                                <button onClick={() => addNewEmploymentResponsabilities(index)}>Agregar Responsabilidad</button>
                                            )
                                        }
                                    </div>

                                ))}
                            </ul>
                        </div>
                    ))}

                    <button onClick={addNewEmployment}>Agregar Empleo</button>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Educación</h3>
                    {profile?.education?.map((edu,index) => (
                        <div key={index} className="
                        mb-4
                        background-color: #f9f9f9;
                        last:border-b-0
                        border-b-2
                        border-b-blue-500/20
                        ">
                            <Input
                                label='Título obtenido'
                                type="text"
                                value={edu?.degree || profile?.education[index]?.degree}
                                onChange={(value) => handleEducationChange(index,'degree',value)}
                            />
                            <Input
                                label='Periodo'
                                type="text"
                                value={edu?.period || profile?.education[index]?.period}
                                onChange={(value) => handleEducationChange(index,'period',value)}
                            />
                            {edu?.description && (
                                <Textarea
                                    value={edu?.description || profile?.education[index]?.description}
                                    onChange={(value) => handleEducationChange(index,'description',value)}
                                />
                            )}
                        </div>
                    ))}

                    <button onClick={() => addNewEducation()}>Agregar Educación</button>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Referencias</h3>
                    {profile?.references?.map((ref,index) => (
                        <div key={index} className="
                        mb-4
                        background-color: #f9f9f9;
                        last:border-b-0
                        border-b-2
                        border-b-blue-500/20
                        "
                        >
                            <Input
                                label='Nombre'
                                type="text"
                                value={ref?.name || profile?.references[index]?.name}
                                onChange={(value) => handleReferenceChange(index,'name',value)}
                            />
                            <Input
                                label='Contacto'
                                type="text"
                                value={ref?.contact || profile?.references[index]?.contact}
                                onChange={(value) => handleReferenceChange(index,'contact',value)}
                            />
                        </div>
                    ))}

                    <button onClick={addNewReference}>Agregar Referencia</button>

                <button type="submit" className="w-full border border-solid border-blue-500 text-blue-500 rounded focus:border-none focus:bg-blue-500 focus:text-white ">
                    Enviar Hoja de Vida
                </button>
                </div>
            </form>
        </>
    )
}

export default Resume