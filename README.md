# whole-react


# parcel 

- it creates a local server to u
- it is creating a local server to u
- it creates HMR(hot module replacement) for u
- it uses file watching algorithm - which is built in c++
- it gives u faster building experience due to caching
- it will also do image optimization for u
- it will do bundling, minification, compressing, and many more for u.
- like Consostent Hashing.
- Code Splitting
- Differintial Bundling - to Support older  browsers. read more abot these topics on internet mor like error handling, https, Tree shaking-means parcel will remove unused codes.
- Its creates different dev and production bundle.
# Food Ordering App

*  what all component my aap will have
* Header
    * logo
   * NAv Items
* Body
   * Search 
   * RestaurantContainer 
   * RestaurantCard

       1. img
       2. name of restaurant
       3. star rating
       4. cuisine 
       5. delivery time,etc.
* Footer
  *  CopyRight
   * Links
   * Address
   * contact

# Export Import

1. Default Export => One Way to Export Your data is using default export .
- note-> default export mai hum kisi file ko ek hi baar export kar sakte hai , and agar hum kisi ek file mai multiple default export kar rahe hai to wo hume error dega.
so remember bidefault a file can export only one thing.
* `example of export`

  ```properties
  1. export default CDN_URl;
  2. export default LOGO_URL;
  ```
    * `how to import default`
    ```properties
    1. import Header from "./Components/Header";
    2. import Body from "./Components/Body";
    ```
2. Named Export => in order to export multiple thing from a single file we use named export method.
-- isme hume simple variavle ke starting point pe export likh dena hai.

* `example`

```properties
1. export const CDN_URl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
2. export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

```
* `import named one`

```properties
1. import { CDN_URl } from "../utils/constants";
2. import { LOGO_URl } from "../utils/constants";
```
# React Hooks
* (Normal JS utility function)
- two very important hook
1.useState() --> this is use to generate super powerful state variable in our app
* first we have to import it as a named import
```properties
import {useState} from "react";
```
2.useEffect()
