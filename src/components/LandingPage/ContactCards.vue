<template>

<div v-if="$viewport.isLessThan('tablet')" class="contact-section-cards">
        <div class="contact-section-findus">  
          <span class="contact-section-text">
            <span>
              <span>123 Cullinary Street</span>
              <br />
              <span>London</span>
              <br />
              <span>E21 3GH</span>
              <br />
              <span></span>
              <br />
              <span>
                Available on
                <span v-html="rawnyvq"></span>
              </span>
              <br />
              <span>Uber Eats and Deliveroo</span>
              <br />
              <span></span>
              <br />
              <span>Email Us</span>
              <br />
              <span>
                dine@dine.com
                <span v-html="raw7aoe"></span>
              </span>
            </span>
          </span>
          <span class="contact-section-text19"><span>Find Us</span></span>
        </div>
        <div class="contact-section-openingtimes">
          <span class="contact-section-text21">
            <span>
              <span>Monday - Thursday</span>
              <br />
              <span>12pm - 11pm</span>
              <br />
              <span></span>
              <br />
              <span>Friday</span>
              <br />
              <span>12pm - 10pm</span>
              <br />
              <span></span>
              <br />
              <span>Saturday</span>
              <br />
              <span>12pm - 8pm</span>
              <br />
              <span></span>
              <br />
              <span>Sunday</span>
              <br />
              <span>12pm - 6pm</span>
              <br />
              <span></span>
              <br />
              <span></span>
            </span>
          </span>
          <span class="contact-section-text48"><span>Opening Times</span></span>
        </div>
        <div class="contact-section-kitchentimes">
          <span class="contact-section-text50"><span>Kitchen Times</span></span>
          <span class="contact-section-text52">
            <span>
              <span>Monday - Thursday</span>
              <br />
              <span>12pm - 9pm</span>
              <br />
              <span></span>
              <br />
              <span>Friday</span>
              <br />
              <span>12pm - 8pm</span>
              <br />
              <span></span>
              <br />
              <span>Saturday</span>
              <br />
              <span>12pm - 8pm</span>
              <br />
              <span></span>
              <br />
              <span>Sunday</span>
              <br />
              <span>12pm - 6pm</span>
              <br />
              <span></span>
              <br />
              <span></span>
            </span>
          </span>
        </div>
      </div>
<div v-else class="contact-section-cards">
        <div class="contact-section-findus" data-aos="fade-left" data-aos-duration="1750">  
          <span class="contact-section-text">
            <span>
              <span>123 Cullinary Street</span>
              <br />
              <span>London</span>
              <br />
              <span>E21 3GH</span>
              <br />
              <span></span>
              <br />
              <span>
                Available on
                <span v-html="rawnyvq"></span>
              </span>
              <br />
              <span>Uber Eats and Deliveroo</span>
              <br />
              <span></span>
              <br />
              <span>Email Us</span>
              <br />
              <span>
                dine@dine.com
                <span v-html="raw7aoe"></span>
              </span>
            </span>
          </span>
          <span class="contact-section-text19"><span>Find Us</span></span>
        </div>
        <div class="contact-section-openingtimes" data-aos="fade-down" data-aos-duration="1750">
          <span class="contact-section-text21">
            <span>
              <span>Monday - Thursday</span>
              <br />
              <span>12pm - 11pm</span>
              <br />
              <span></span>
              <br />
              <span>Friday</span>
              <br />
              <span>12pm - 10pm</span>
              <br />
              <span></span>
              <br />
              <span>Saturday</span>
              <br />
              <span>12pm - 8pm</span>
              <br />
              <span></span>
              <br />
              <span>Sunday</span>
              <br />
              <span>12pm - 6pm</span>
              <br />
              <span></span>
              <br />
              <span></span>
            </span>
          </span>
          <span class="contact-section-text48"><span>Opening Times</span></span>
        </div>
        <div class="contact-section-kitchentimes" data-aos="fade-right" data-aos-duration="1750">
          <span class="contact-section-text50"><span>Kitchen Times</span></span>
          <span class="contact-section-text52">
            <span>
              <span>Monday - Thursday</span>
              <br />
              <span>12pm - 9pm</span>
              <br />
              <span></span>
              <br />
              <span>Friday</span>
              <br />
              <span>12pm - 8pm</span>
              <br />
              <span></span>
              <br />
              <span>Saturday</span>
              <br />
              <span>12pm - 8pm</span>
              <br />
              <span></span>
              <br />
              <span>Sunday</span>
              <br />
              <span>12pm - 6pm</span>
              <br />
              <span></span>
              <br />
              <span></span>
            </span>
          </span>
        </div>
      </div>


</template>


<script>

export default {
  data() {
    return {
      rawnyvq: ' ',
      raw7aoe: ' ',
    }
  },
}

</script>

<style scoped>
.contact-section-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.contact-section-bgimage {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/3201919/pexels-photo-3201919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
.contact-section-contactslide {
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-self: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(217, 217, 217, 0.77);
}
.contact-section-logo {
  top: 39px;
  left: 0px;
  right: 0px;
  width: 208px;
  height: 208px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.contact-section-logo1 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 208px;
  height: 208px;
  margin: auto;
  position: absolute;
}
.contact-section-cards {
  top: 292px;
  left: 0px;
  right: 0px;
  width: 1221px;
  height: 619px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.contact-section-findus {
  top: 0px;
  left: 0px;
  width: 349px;
  height: 609px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 16px;
  background-color: rgba(189, 173, 173, 0.75);
}
.contact-section-text {
  top: 139px;
  left: 19px;
  color: rgba(101, 85, 85, 1);
  width: 322px;
  height: auto;
  position: absolute;
  font-size: 32px;
  text-align: right;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.contact-section-text19 {
  top: 10px;
  color: rgba(93, 80, 80, 1);
  width: 336px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Regular;
  text-align: right;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.contact-section-openingtimes {
  top: 2px;
  left: 437px;
  width: 350px;
  height: 609px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 16px;
  background-color: rgba(189, 173, 173, 0.75);
}
.contact-section-text21 {
  top: 129px;
  left: 14px;
  color: rgba(101, 85, 85, 1);
  width: 322px;
  height: auto;
  position: absolute;
  font-size: 32px;
  text-align: right;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.contact-section-text48 {
  top: 8px;
  left: 0px;
  color: rgba(93, 80, 80, 1);
  width: 336px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Regular;
  text-align: right;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.contact-section-kitchentimes {
  top: 0px;
  left: 863px;
  width: 358px;
  height: 609px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 16px;
  background-color: rgba(189, 173, 173, 0.75);
}
.contact-section-text50 {
  top: 10px;
  color: rgba(93, 80, 80, 1);
  width: 336px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Regular;
  text-align: right;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.contact-section-text52 {
  top: 139px;
  left: 14px;
  color: rgba(101, 85, 85, 1);
  width: 322px;
  height: auto;
  position: absolute;
  font-size: 32px;
  text-align: right;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

@media (max-width:479px) {
.contact-section-bgimage {
    height: 100vh;
}
 
.contact-section-container {
    height: 100vh;
}

.contact-section-logo1 {
  top: -11px;
  left: 0px;
  right: 0px;
  width: 90px;
  height: 90px;
  margin: auto;
  position: absolute;
}

.contact-section-findus {
  top: -8rem;
  left: 3rem;
}

.contact-section-openingtimes {
  top: 32rem;
  left: 3rem;
}

.contact-section-kitchentimes {
  top: 72rem;
  left: 3rem;
}

.contact-section-bgimage {
  background-image: url('https://images.pexels.com/photos/3201919/pexels-photo-3201919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') repeat-y;
  top: 0rem;
}

.contact-section-contactslide {
  height: 100vh;
  overflow-y: scroll;
  top: 0rem;
}

}
</style>
