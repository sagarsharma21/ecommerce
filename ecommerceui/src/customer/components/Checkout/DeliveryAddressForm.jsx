import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {

  const handleSubmit = (e) =>{
    e.preventDefault(); //prevent default behaviour, i.e, page refresh
    
    const data= new FormData(e.currentTarget);

    const address= {
      firstName : data.get("firstName"),
      lastName : data.get("lastName"),
      home: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      pin: data.get("pin"),
      mobile: data.get("mobile")
    }

    console.log("address", address)
  }
  return (
    <div>
      DeliveryAddressForm!!
      <Grid container spacing={4}>
        
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll ">l
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 250)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>  
            <Box className='border rounded-md shadow-md p-5'>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}> 
                              <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                          </Grid>

                          <Grid item xs={12} >
                             <TextField
                             required 
                             id="address"
                             name="address"
                             label="Address"
                             fullWidth
                             autoComplete="given-name"
                             multiline
                             rows={5}
                             />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            autoComplete="given-name"
                            fullWidth
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="state"
                            name="state"
                            label="State/Province"
                            autoComplete="given-name"
                            fullWidth
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="pin"
                            name="pin"
                            label="PIN/Postal Code"
                            autoComplete="shipping postal-code"
                            fullWidth
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="mobile"
                            name="mobile"
                            label="Mobile Number"
                            autoComplete="given-name"
                            fullWidth
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Button
                            variant="contained"
                            size="large"
                            type="submit"
                            sx={{py:1.5, mt:2, bgcolor:"RGB(145 80 250)"}}
                            >
                              Deliver Here
                            </Button>
                            </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
 