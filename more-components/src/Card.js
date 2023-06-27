export default function Card({children}){
 const cardStyle={
  width: '300px',
  height: '300px',
  border: '1.5px solid pink',
  borderRadius: '2px',
  padding: '4px',
  margin: '4px'
 }
 return(
  <div style={cardStyle}>
   {children}
  </div>
 )
}