import React from 'react';
import { Modal } from './Modal';

const images = [
  {
    src: "./../../../assets/Modal1.jpeg",
    title: "Ten en cuenta las necesidades de los gatos jóvenes o viejos",
    text: "Ten en cuenta que los gatitos y los gatos viejos con artritis u otros problemas de salud pueden tener problemas para entrar y salir de una caja demasiado alta. En el caso de los gatitos y los gatos con necesidades especiales, usa cajas de poca altura en un área de fácil acceso, o compra una caja ajustable"
  },
  {
    src: "./../../../assets/Modal2.jpeg",
    title: "Bríndale a tu gato un rascador vertical",
    text: "Rascar es una parte normal del comportamiento de los gatos y no hay forma de que puedas entrenarlo para que no lo haga. Si tu gato aún tiene sus garras, necesitará uno o dos rascadores verticales para que no arañe los muebles, los artículos de madera, etc. Al brindarle a tu gato un rascador vertical, le permitirás que disfrute de un comportamiento saludable y normal"
  },
  {
    src: "./../../../assets/Modal3.jpeg",
    title: "No alimentes en exceso a tu gato",
    text: "Sigue las recomendaciones del veterinario al pie de la letra y asegúrate de que tu gato haga mucho ejercicio, ya que la obesidad es uno de los mayores problemas de salud que los gatos afrontan en la actualidad. Los gatos obesos son más propensos a desarrollar diabetes cuando llegan a una edad intermedia. El peso adicional también contribuye con la artritis, las enfermedades cardiacas y otros problemas de salud en los gatos"
  },
  {
    src: "./../../../assets/Modal4.jpeg",
    title: "Cepilla a tu gato dependiendo de las necesidades de su pelaje",
    text: "Los gatos parecen arreglarse el pelaje ellos mismos; por ello, puedes creer que no necesitas cepillarlos. Pero sí es necesario que cepilles a los gatos con pelaje largo varias veces a la semana y a los gatos con pelaje corto, una vez a la semana. Esto permitirá reducir la cantidad de pelo en tu casa y ayudará a tu gato a evitar las temidas bolas de pelo"
  },
  {
    src: "./../../../assets/Modal5.jpeg",
    title: "Haz que el gatito se acostumbre a que le cepilles los dientes",
    text: "Los gatos padecen enfermedades en los dientes. Para cepillar los dientes de tu gato, necesitas un cepillo dental de cerdas suaves y una pasta dental veterinaria. Nunca uses una pasta dental para humanos, ya que demasiado flúor puede causarle malestar estomacal al gato. Debido a la alta concentración de flúor en la pasta dental para humanos, una cantidad excesiva podría ser tóxica. Empieza ofreciéndole a tu gato un poco de la pasta dental veterinaria."
  },
  {
    src: "./../../../assets/Modal6.jpeg",
    title: "Considera el tiempo que tengas para dedicarle a un gato",
    text: "Si bien un gato no requiere paseos diarios como un perro, no creas que no necesita que le dediques tiempo. Los gatos son mascotas activas que necesitan jugar mucho y son compañeros afectuosos que requieren atención. También tendrás que pasar tiempo limpiando la caja de arena y dándole al gato comidas estructuradas."
  },
];


export class Modals extends React.Component {
  constructor(props) {
    super(props);

    // Estado inicial del modal
    this.state = {
      showModal: false, // Indica si el modal está visible o no 
      selectedImage: null, // La imagen seleccionada para mostrar en el modal es un null
      selectedTitle: "", // El título de la imagen seleccionada es un string vacio
      selectedText: "" // El texto asociado a la imagen seleccionada es un string vacio
    };
  }

  // Manejador de evento para hacer clic en una imagen
  handleImageClick = (index) => {
    // (index): Esta función toma un argumento index, que es el índice de la imagen en el array images que se hizo clic.

    const { src, title, text } = images[index];
    // Aquí se desestructura el objeto de imagen correspondiente al índice dado en el array images. El objeto de imagen contiene tres propiedades: src (fuente de la imagen), title (título de la imagen) y text (texto asociado a la imagen)

    this.setState({
      showModal: true, // Esto indica que el modal debe mostrarse, ya que se ha hecho clic en una imagen.
      selectedImage: src, // Esto establece la fuente de la imagen seleccionada en el estado, para que pueda ser mostrada en el modal.
      selectedTitle: title, // Esto establece el título de la imagen seleccionada en el estado, para que pueda ser mostrado en el modal.
      selectedText: text // Esto establece el texto asociado a la imagen seleccionada en el estado, para que pueda ser mostrado en el modal.
    });
  };

  // Manejador de evento para cerrar el modal
  handleCloseModal = () => {

    // Restablece el estado para ocultar el modal y limpiar la información de la imagen seleccionada
    this.setState({
      showModal: false,
      selectedImage: null,
      selectedTitle: "",
      selectedText: ""
    });
  };

  render() {
    // Divide las imágenes en dos filas para organizarlas visualmente
    const imagesRow1 = images.slice(0, 3);
    const imagesRow2 = images.slice(3, 6);

    return (
      <div className='flex flex-col items-center mb-[80px]'>
        <h2 className='merri-title mb-[84px] text-5xl'>Guia de Cuidados</h2>
        <div className='space-y-[80px]'>
          <div className='flex space-x-[92px]'>

            {/* Mapea y renderiza las imágenes de la primera fila */}
            {imagesRow1.map((image, index) => (
              <img
                key={index}
                // Establece una clave única para cada imagen en la lista

                src={image.src}
                // Establece la fuente de la imagen a la fuente de la imagen actual del array.

                alt={`Modal ${index + 1}`}
                // Establece el atributo alt de la imagen para accesibilidad, utilizando el índice más 1 para hacerlo único.

                className='w-[450px] h-[450px] rounded-[32px] shadow-2xl'
                
                onClick={() => this.handleImageClick(index)}
                // Asigna un manejador de evento onClick que se activa cuando se hace clic en la imagen, llamando a handleImageClick con el índice como argumento.

              />
            ))}
          </div>
          <div className='flex space-x-[92px]'>

            {/* Mapea y renderiza las imágenes de la segunda fila */}
            {imagesRow2.map((image, index) => (
              <img
                key={index + 3}
                src={image.src}
                alt={`Modal ${index + 4}`}
                className='w-[450px] h-[450px] rounded-[32px] shadow-2xl'
                onClick={() => this.handleImageClick(index + 3)}
              />
            ))}
          </div>
        </div>

        {/* Renderiza el modal si showModal es true */}
        {this.state.showModal && (
          <Modal
            image={this.state.selectedImage}
            title={this.state.selectedTitle}
            text={this.state.selectedText}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}


