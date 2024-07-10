import React from 'react'

export default function Page() {
  return (
    <>
    <div className="container mx-auto flex flex-col  justify-center py-10">
        <p className="text-2xl font-bold py-5 text-center">Tipos de hojas de vida que asesoramos:</p>
        <div className="grid grid-cols-1 gap-4 py-3">
          <p className="text-2xl font-bold ">• Cronológica:</p>
          <p className="text-2xl">Este tipo de hoja de vida incluirá la información académica y  laboral,ordenándose de lo más reciente a lo más antiguo.</p>
        </div>
      <div className="grid grid-cols-1 gap-4 py-3">
        <p className="text-2xl font-bold ">• Funcional:</p>
        <p className="text-2xl">Este tipo de hoja de vida  resalta  las habilidades que han desarrollado en temas específicos.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 py-3">
        <p className="text-2xl font-bold ">• Combinada:</p>
        <p className="text-2xl">Este formato,enlaza la información laboral y académica de manera cronológica y destaca las habilidades adquiridas o desarrolladas por temas específicos.</p>
      </div>
    </div>
    
    <div className="container mx-auto flex flex-col  justify-center py-10 bg-gray-200 p-5 mb-5">
      <p className="text-2xl font-bold py-5 text-center">Formulario de hoja de vida</p>
      <form className="grid grid-cols-1 gap-4 py-3">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" />
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" />
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" />
        <label htmlFor="estadoCivil">Estado civil:</label>
        <input type="text" id="estadoCivil" name="estadoCivil" />
        <label htmlFor="correo">Correo electrónico:</label>
        <input type="text" id="correo" name="correo" />
        <label htmlFor="perfil">Perfil:</label>
        <input type="text" id="perfil" name="perfil" />
        <label htmlFor="formacion">Formación académica:</label>
        <input type="text" id="formacion" name="formacion" />
        <label htmlFor="habilidades">Habilidades:</label>
        <input type="text" id="habilidades" name="habilidades" />
        <label htmlFor="experiencia">Experiencia profesional:</label>
        <input type="text" id="experiencia" name="experiencia" />
        <button type="submit">Enviar</button>
      </form>
    </div>
    {/* lema final  */}
    <div className="container mx-auto flex flex-col  justify-center py-10 p-5 my-10">
        <p className="text-2xl font-bold py-5 text-center">“Crea tu propia hoja de vida o contrata un asesor quien guíe tu proceso de creación. Descárgala y súbela a tu perfil, para que puedas disfrutar del proceso de empleabilidad.”</p>
    </div>
    </>
  )
}
