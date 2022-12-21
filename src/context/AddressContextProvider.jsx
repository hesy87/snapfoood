import { useState } from "react";

import AddressContext from "./addressSelector-context";


const AddressProvider = (props) => {

  const [AddressState,SetAddressState] = useState({Title:'Home' , Address:'24 Banafshe Abazar ....'})

  return (
    <AddressContext.Provider value={{AddressState,SetAddressState }}>
      {props.children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;