'use client'
import { getCurriculum, saveCurriculum, updateCurriculum } from '@/actions/curriculum'
import { getUserInfo } from '@/actions/register'
import { Input,Textarea } from '@/components/inputs'
import mongoose, { set } from 'mongoose'
import React,{ FormEvent,useEffect,useRef,useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Resume = () => {
    // get current id user from session
    const { data: session } = useSession()
    const router = useRouter()
    const ref = useRef<HTMLFormElement>(null)
    const [hasProfile,setHasProfile] = useState(false)
    const [updated,setUpdated] = useState(false)
    const [created,setCreated] = useState(false)


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
        console.log('curriculum', { r })
        setHasProfile(true)
        setProfile(r)
    }


    useEffect(() => {
        if (session) {
            curriculumOptain(session?.user?.email)
        }
    },[session,hasProfile,updated,created])

    

    const handleProfileChange = (field: string,value: string) => {
        setProfile({ ...profile,[field]: value })
    }

    const handleSkillChange = (index: number,field: keyof typeof profile.skills[0],value: string) => {
        const newSkills = [...profile.skills]
        newSkills[index][field] = value
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

    const [error,setError] = useState<string>()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        let r = null
        if (!hasProfile) {
             r = saveCurriculum({
                    name: formData.get('name') as string,
                    jobTitle: formData.get('jobTitle') as string,
                    address: formData.get('address') as string,
                    city: formData.get('city') as string,
                    country: formData.get('country') as string,
                    phone: formData.get('phone') as string,
                    email: formData.get('email') as string,
                    skills: profile.skills,
                    profileDescription: profile.profileDescription,
                    employmentHistory: profile.employmentHistory,
                    education: profile.education,
                    references: profile.references,
            }, session?.user?.email as string)
            console.log('nuevo')
            setCreated(true)
        } else {
            r = updateCurriculum({
                    name: formData.get('name') as string,
                    jobTitle: formData.get('jobTitle') as string,
                    address: formData.get('address') as string,
                    city: formData.get('city') as string,
                    country: formData.get('country') as string,
                    phone: formData.get('phone') as string,
                    email: formData.get('email') as string,
                    skills: profile.skills,
                    profileDescription: profile.profileDescription,
                    employmentHistory: profile.employmentHistory,
                    education: profile.education,
                    references: profile.references,
            }, session?.user?.email as string)
            setUpdated(true)
            console.log('actualizado')
        }

        ref.current?.reset()
        // @ts-ignore
        // if(r?.status === 'ok') {
            setTimeout(() => {
                setUpdated(false)
                setCreated(false)
            },3000)
        // } else {
            // @ts-ignore
            // setError(r?.error)
        // }
    }

    if(updated) {
        return (
            <div className="bg-green-500 text-white p-8">
                <p>Perfil actualizado</p>
            </div>
        )
    }

    if(created) {
        return (
            <div className="bg-green-500 text-white p-8">
                <p>Perfil creado</p>
            </div>
        )
    }

    return (
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
                    value={profile?.name}
                    onChange={(value) => handleProfileChange('name',value)}
                />
                <Input
                    label='Profesión'
                    name='jobTitle'
                    type="text"
                    value={profile?.jobTitle}
                    onChange={(value) => handleProfileChange('jobTitle',value)}
                />

                <h3 className="text-2xl font-semibold mb-2">Detalles</h3>
                <Input
                    label='Dirección'
                    name='address'
                    type="text"
                    value={profile?.address}
                    onChange={(value) => handleProfileChange('address',value)}
                />
                <Input
                    label='Ciudad'
                    name='city'
                    type="text"
                    value={profile?.city}
                    onChange={(value) => handleProfileChange('city',value)}
                />
                <Input
                    label='País'
                    name='country'
                    type="text"
                    value={profile?.country}
                    onChange={(value) => handleProfileChange('country',value)}
                />
                <Input
                    label='Teléfono o Celular'
                    name='phone'
                    type="text"
                    value={profile?.phone}
                    onChange={(value) => handleProfileChange('phone',value)}
                />
                <Input
                    label='Correo electrónico'
                    name='email'
                    type="text"
                    value={profile?.email}
                    onChange={(value) => handleProfileChange('email',value)}
                />

                <h3 className="text-2xl font-semibold mt-6 mb-2">Habilidades</h3>
                <ul>
                    {profile?.skills.map((skill,index) => (
                        <li key={index}>
                            <Input
                                type="text"
                                value={skill?.name}
                                onChange={(value) => handleSkillChange(index,'name',value)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white p-8 md:w-2/3 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                <h3 className="text-2xl font-bold mb-4">Perfil</h3>
                <Textarea
                    value={profile?.profileDescription}
                    onChange={(value) => handleProfileChange('profileDescription',value)}
                />

                <h3 className="text-2xl font-bold mt-8 mb-4">Experiencia Laboral</h3>
                {profile.employmentHistory.map((job,index) => (
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
                            value={job?.position}
                            onChange={(value) => handleEmploymentChange(index,'position',value)}
                        />
                        <Input
                            label='Periodo'
                            type="text"
                            value={job?.period}
                            onChange={(value) => handleEmploymentChange(index,'period',value)}
                        />
                        <ul className="list-disc list-inside">
                            <h3 className="text-sm font-semibold mt-6 mb-2 text-gray-500">Agrega tus responsabilidades</h3>
                            {job?.responsibilities.map((responsibility,resIndex) => (
                                <Input
                                    key={resIndex}
                                    type="text"
                                    value={responsibility}
                                    onChange={(value) => handleResponsibilityChange(index,resIndex,value)}
                                />
                            ))}
                        </ul>
                    </div>
                ))}

                <h3 className="text-2xl font-bold mt-8 mb-4">Educación</h3>
                {profile?.education.map((edu,index) => (
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
                            value={edu?.degree}
                            onChange={(value) => handleEducationChange(index,'degree',value)}
                        />
                        <Input
                            label='Periodo'
                            type="text"
                            value={edu?.period}
                            onChange={(value) => handleEducationChange(index,'period',value)}
                        />
                        {edu?.description && (
                            <Textarea
                                value={edu?.description}
                                onChange={(value) => handleEducationChange(index,'description',value)}
                            />
                        )}
                    </div>
                ))}

                <h3 className="text-2xl font-bold mt-8 mb-4">Referencias</h3>
                {profile?.references.map((ref,index) => (
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
                            value={ref?.name}
                            onChange={(value) => handleReferenceChange(index,'name',value)}
                        />
                        <Input
                            label='Contacto'
                            type="text"
                            value={ref?.contact}
                            onChange={(value) => handleReferenceChange(index,'contact',value)}
                        />
                    </div>
                ))}
                <button className="w-full border border-solid border-blue-500 text-blue-500 rounded focus:border-none focus:bg-blue-500 focus:text-white ">
                    Enviar Hoja de Vida
                </button>
            </div>
        </form>
    )
}

export default Resume