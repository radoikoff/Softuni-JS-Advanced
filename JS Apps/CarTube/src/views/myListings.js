import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyCars } from '../api/data.js';
import { carTemplate } from './common/car.js';


const myCarsTemplate = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

       ${cars.length > 0 ? cars.map(carTemplate) 
       : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}

    </div>
</section>`;

export async function myListingsPage(ctx) {
    const cars = await getMyCars(ctx.user._id);

    ctx.render(myCarsTemplate(cars));
};