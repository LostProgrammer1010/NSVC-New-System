import "../styles/InfoBox.css";


function InfoBox({title, description, img}) {

  return (
    <div class="container-info">
      <h1 class="title">{title}</h1>
      <div class="information">
        <p class="description">{description}</p>
        <img src={img}/>
      </div>
    </div>
  )
}

export default InfoBox
