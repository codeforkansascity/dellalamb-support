Refugee Services App

## **Project Summary**

This mobile-first platform connects refugees and immigrants in Kansas City to real-time, verified services, like housing, healthcare, education, and community support. Built with and for the community, it offers multilingual access, personalized search, and tools for clients, service providers, case managers, and volunteers.

The app is being piloted with Della Lamb as the first partner and steward. While Della is a key collaborator, the broader vision is a city-wide tool that reduces fragmentation and makes essential resources easier to access and navigate.

This is more than a directory, it’s a community-driven tool for connection, access, and empowerment.

* Mobile-first platform connecting refugees to trusted, verified, real-time services.  
* Empowers organizations and local businesses to list, manage, and track services.  
  Caseworkers can use for intake or referrals.  
* **Primary need:** Centralized, accessible resource directory with multilingual support and easy update process.  
  **Users:** Refugees (primary), nonprofit service providers, local businesses, volunteers, case workers.  
* Consider inclusion of non-CBO resources (laundromats, markets).  
* Supports connection between refugees, volunteers, and agencies.

  **Current Pain Points**  
* Resources scattered across flyers, websites, and word of mouth.  
* Small grassroots providers often overlooked.  
* Caseworkers spend excessive time verifying availability.  
* Lack of centralized promotion of services.  
* No feedback loop for providers to improve offerings.  
* Isolation among refugee communities.

## **High-Level Project Needs**

* Mobile-first app for clients.  
* Web \+ mobile app for service providers/caseworkers.  
* Multilingual text, iconography, and potential audio options.  
* Service/resource directory with robust search and filter capabilities.  
* Easy service provider profile setup and updates.  
* Admin dashboard for managing users, content, and analytics.  
* Live availability and booking/waitlist functions.  
* Secure messaging with translation.  
* Feedback system for resources.

**Ideal User Journey**

* Landing page/promotional page which encourages users to download the app  
* Client downloads app → creates account → optional personal info → orientation  
* Service provider creates account → admin validates → orientation → org setup  
* Provider adds service/resource → listed in directory → clients search/filter/save/shares resources/services

**MVP Feature List**

**User Types**

* Client  
* Service provider  
* Case manager  
* Admin/Anna  
* Volunteer

**Features**

* Branding/color scheme that has an organization agnostic look and feel, and considers cultural implications.   
  * Anna did some initial brainstorming using ChatGPT and those notes can be found [here](https://docs.google.com/document/d/1JvJ-mZb4giTD3h3e0Zh522m7ZpyoOC4QGumLjUeJQ7Q/edit?usp=sharing)   
* Mobile-first app for clients, web-based site and mobile app for service providers and case workers  
* Multi-lingual (potentially Spanish, French, Haitian Creole, Swahili, Dari, Arabic, Pashto, Ukrainian, etc )  
  * Possible native tools/APIs for multilingual support (Spanish, Creole, Arabic, etc.).  
  * Project stakeholders can support on identifying which languages  
  * Note that multi-lingual may be considered a post-MVP if the dev effort is substantial  
* Account creation/login  
  * All users but clients should be verified by an admin before they can add resources to the app  
  * Client login info to capture: Email and/or phone, password, name  
  * Optional client personal info: Language(s) spoken, possibly nationality/country of origin  
  * Allow for multiple ways to log in (password, face, whatsapp, etc)  
* Admin ability to verify user accounts (other than clients)  
* Admin ability to independently add organizations, resources, and services to directory  
* Service provider creates their org’s profile  
  * What details to capture at org level vs resource level?   
  * Possibly org name, org mission, address, phone, hours  
* Service provider (or admin) adds resources to the service directory  
  * *(Note to stakeholders \- not needed for dev: We’ll treat services and resources the same for MVP and will look at possibly distinguishing post-MVP. And we’ll build in collections post-MVP as well)*  
  * Add resources and resource details *(see lists below in the “resource directory” section for guidance on what resource details can be added).*   
    * Stakeholders determine what fields should be required vs optional. Resource name, org name, address, category, etc could be required. But not all resources will have all details available to add.  
  * Ability to set a resource you created as draft/active/paused status. Draft and paused statuses won’t be displayed on the public resource directory, only active resources.  
  * Ability to remove/delete a resource that you created. Confirmation dialog before deleting.  
* Resource directory \- viewable by all users  
  * Sort/filter options  
    * Search \- by resource name or organization name  
    * Toggle to view as list or view on map (based on resource address listed)  
    * Sort by distance  
    * Filters (filter groups listed below need to have options defined by stakeholders. Options should appear as multi-select checkboxes)  
      * Walkin/referral/appt needed  
      * Religious considerations  
      * Nationality  
      * Special needs  
      * Language  
      * Days & hours/open now  
      * Cost/financial assistance/free  
  * Resource information  
    * Show resources as expandable/collapsible cards, or ability to click on a resource card to see a full resource page *(devs can weigh in on what is more feasible)*  
    * Resource cards should show  
      * Resource name  
      * Organization name  
      * Category/subcategory   
      * Address  
      * Hours  
    * When card is expanded/resource page opened, details listed should include *(Note that not all resources will have info entered for all the details below. We should just show what info is available. And for fields that don’t have info, those fields shouldn’t be displayed on the page)*  
      * Organization name  
      * Resource name  
      * Category/subcategory *(see category/subcategory list below)*  
      * Location/address (click to open directions in device’s preferred map app)  
      * Contact information (phone and email with clickable links to open appropriate app on device)  
      * Walkin/referral/appt/phone  
      * Religious considerations (halal/kosher)  
      * Languages and translation services available  
      * Nationality  
      * Special needs (deaf/blind)  
      * Insurance required  
      * Cost/fees/free  
      * Hours  
      * Contact information  
  * Resource categories/subcategories (allow for categories/subcategories to be updated by admin users)  
    * Housing and shelter: shelters, tenant support, DV support  
    * Food and nutrition: food pantries, WIC, ethnic markets  
    * Healthcare and mental health: clinics, mental health, women’s health  
    * English and education: ESL, GED, after-school, citizenship  
    * Employment and job training: job search, training, interpreter-friendly jobs  
    * Transportation: bus passes, ride services, drivers ed  
    * Legal support: immigration, legal aid, DV protection  
    * Financial and tax support: budgeting, tax help, credit, banking  
    * Technology and digital literacy: wi-fi, tech training, device access  
    * Family and child services: parenting support, diapers, case management   
    * Faith and cultural community spaces: worship, events, community centers  
    * Clothing and household: clothing closets, furniture banks, hygiene  
    * Immigration and resettlement support: agencies, translation, rights guides  
    * Community connection: events, clubs, volunteer ops  
  * Resource actions  
    * A share button and a save button should be available on each resource card (and full resource page if we decide to build out full resource pages).  
    * Share button will copy the link to their clipboard, allowing the user to page the link into whatever messaging/email app they’d like  
    * Save button will save the resource to the user’s profile  
* Client profile  
  * Ability to update their account information and personal info questions  
  * Ability to see their saved resources. Ability to sort the list alphabetically, by date added, or by distance. Ability to “unsave” a resource.  
  * Client profiles, and saved resources, should only be viewable for that user. Profiles are not public.

## **Idea Exploration**

* Use [211](https://search.unitedwaygkc.org/) as a design/functionality reference. Possibly leverage/import 211 resources  
* Use [1degree.org](http://1degree.org) as a design/functionality reference  
* [Initial idea/concept](https://www.canva.com/design/DAGmr9YfwL0/_uk_LrIpRexytDYu9fHl0A/edit) created in Canva

## **Nice to Have’s**

* Resources ratings/reviews/feedback  
* In-app messaging and 2-way video   
* Community bulletin board and groups  
* Referrals  
* Collections (groupings of resources) that can be created by service providers or admins and shown publicly on service directory. Or can be created privately by clients and seen in their own personal profile

**Outdated Documents for Reference**

* [Della Lamb Discovery Workshop Miro board](https://miro.com/app/board/uXjVJeCnFKQ=/)  
* [Della Lamb MVP priorities](https://dellalamb-my.sharepoint.com/personal/astewart_dellalamb_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fastewart%5Fdellalamb%5Forg%2FDocuments%2FApp%20Project%2FBridge%5Fand%5FBloom%5FKC%5FStrategy%5FDetails%5FUPDATED%2Epdf&parent=%2Fpersonal%2Fastewart%5Fdellalamb%5Forg%2FDocuments%2FApp%20Project&ga=1)  
* [Della Lamb initial Canva design](https://www.canva.com/design/DAGmr9YfwL0/_uk_LrIpRexytDYu9fHl0A/edit)  
* [Della Lamb initial project proposal](https://dellalamb-my.sharepoint.com/:w:/g/personal/astewart_dellalamb_org/EfrObJzkOxNCt5i_f7m7cIQBS03z1L5zI2TKcdZM1RC0VQ?rtime=T2VUS7TC3Ug)  
* [Della Lamb first POC](https://dellalamb-my.sharepoint.com/:w:/g/personal/astewart_dellalamb_org/Ed1uBGEYii1OjhZ7qEPdSwQBIMwvZtGST99M6vAu0a6Zww?rtime=f4pf6l6p3Ug)  
* [Della Lamb second POC](https://docs.google.com/document/d/1z5sP9rl2I4ZH3kZlasnhejf_vZRvOeIdktxfqKRFP9Q/edit?tab=t.0)

[https://www.canva.com/design/DAGmr9YfwL0/8oRNkv5AqGAx1cgLYv8SIw/view?utm\_content=DAGmr9YfwL0\&utm\_campaign=designshare\&utm\_medium=link2\&utm\_source=uniquelinks\&utlId=hf27dde364b](https://www.canva.com/design/DAGmr9YfwL0/8oRNkv5AqGAx1cgLYv8SIw/view?utm_content=DAGmr9YfwL0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf27dde364b)

Google sheets- Master Resource list  
[https://docs.google.com/spreadsheets/d/1Zfu2JeTeIA0hKRmuawItSaDGYIyw71ml/edit?usp=sharing\&ouid=109188241645534978001\&rtpof=true\&sd=true](https://docs.google.com/spreadsheets/d/1Zfu2JeTeIA0hKRmuawItSaDGYIyw71ml/edit?usp=sharing&ouid=109188241645534978001&rtpof=true&sd=true)

Google sheets- Ethnic Market list Metro KC area  
[https://docs.google.com/spreadsheets/d/1UVZzqs28Z5zvfR4ay\_fgl2kVXsYDpNcd/edit?usp=sharing\&ouid=109188241645534978001\&rtpof=true\&sd=true](https://docs.google.com/spreadsheets/d/1UVZzqs28Z5zvfR4ay_fgl2kVXsYDpNcd/edit?usp=sharing&ouid=109188241645534978001&rtpof=true&sd=true)

