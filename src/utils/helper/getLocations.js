
function getLocations(events){
  return [...new Set(events.data.map(event => event.location))];
};

export default getLocations