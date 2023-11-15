import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          Certified Web 3.0 and Metaverse<br/>Developer: A Nationwide Program in<br/>Karachi, Lahore, Islamabad, 
          and<br/>Peshawar
        </h1>
        <p>
          Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry 
          with 5 Billion<br/>Users
        </p>
      </div>
        <h2>
          Certified Web 3.0 and Metaverse Developer: A<br/>Nationwide Program in Karachi, Lahore,<br/>Islamabad, 
          and Peshawar
        </h2>
      <img
        src="/images/image.jpg" 
        alt="Example Image" 
        width={500} 
        height={300}
      />
      <p>
        The Future of the Web is Web 3.0, Metaverse, and Edge Computing.<br/> Panaverse DAO is a movement
        to spread these technolgies<br/>globally. It is community of Web 3 and Metaverse developers,<br/>designers,
        trainers, startup founders and service providers.
      </p>
      <a href="https://www.piaic.org/">Admissions Now Open in Karachi, Lahore, Islamabad, and<br/>Peshawar<br/></a>
      <a href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">This document on Google Docs</a>
      <p>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.</p>
      <p>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 <a href="https://www.citivelocity.com/citigps/metaverse-and-money/">research paper</a> that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>
      <h2>The Program in a Nutshell: Earn While You Learn</h2>
      <p>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</p>
    <h2>Program of Studies</h2>
    <p>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
    <h2>Core Courses (Common in All Specializations)</h2>
    <p>Every participant of the program will start by completing the following two core courses:</p>
    <ul>
      <li><a href="https://github.com/panaverse/panaverse.github.io#quarter-i-core">Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript</a></li>
      <li><a href="https://github.com/panaverse/panaverse.github.io#quarter-ii-core">Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</a></li>
    </ul>
    <h2>Specialized Tracks</h2>
    <p>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>
    <h2>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
    <p>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
    <ul>
      <li><a href="https://www.panaverse.co/">Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</a></li>
      <li><a href="https://www.panaverse.co/">Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</a></li>
    </ul>
    <h2>Artificial Intelligence (AI) and Deep Learning Specialization</h2>
    <p>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
    <ul>
      <li><a href="https://www.panaverse.co/">Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</a></li>
      <li><a href="https://www.panaverse.co/">Quarter IV AI-361: Deep Learning and MLOps</a></li>
    </ul>
    <hr/>
    <h2>Video from Youtube</h2>
    <iframe width="640" height="360" src="https://www.youtube.com/embed/-lLkWtOQQ-U" allowFullScreen></iframe>
    <hr/>
    <h2>Video from Device</h2>
    <video width="640" height="360" controls>
      <source src="/videos/video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <hr/>
    <h2>Add Image</h2>
    <img width="600" height="300" src="/images/image2.jpg"/>
    <hr/>
    <h2>Dummy Table</h2>
    <table border={1}>
      <thead>
        <tr>
          <th>Roll No.</th>
          <th>Student Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Daud Iqbal</td>
          <td>A</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Hassan Bin Shahid</td>
          <td>A</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Ali Hassan</td>
          <td>B+</td>
        </tr>
      </tbody>
    </table>
    <hr/>
    <h2>Contact Form</h2>
    <form>
      <label htmlFor="firstName">First Name:
      <input type="text" name="firstname" required/></label><br/><br/>
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastname" required/><br/><br/>
      <label htmlFor="email">E-mail:</label>
      <input type="text" name="email" required/><br/><br/>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="number" name="phonenumber" required/><br/><br/>
      <label htmlFor="message">Message</label><br/>
      <textarea name="message" rows={4} required></textarea>
      <button type="submit">Submit</button>
    </form>
    <hr/>
    </main>
  )
}
