const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto;
    margin-right: auto;
    max-width: fit-content;">
    <p>name: Winai tiandon</p>
    <p>id: 65130271</p>
    <div style="width:100%;">
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/416142616_6976432305737868_2607571867521795226_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oIct2vRMwqAQ7kNvgF0E-h0&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYDhN9k_8GKL6_K25vhWgBpkicRfWW3JUMzYoseYLWzkNA&oe=664F892A" style="width:300px;height:300px;" >
    </div>
    
    <a href="/myresearch">MyResearch</a>
    <a href="/researchplan">My Research Plan</a>
    <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>ในโลกปัจจุบันเทคโนโลยีเข้ามามีบทบาทในชีวิตประจำวันของคนเรามากขึ้น และในภาคธุรกิจเอง จึงไม่หยุดนิ่งในการพัฒนา ระบบการจัดการจัดเก็บและเบิกจ่ายเครื่องมือและอุปกรณ์ สำหรับ Warehouse ซึ่งก่อนหน้านี้ เราได้พบปัญหาของ ระบบการจัดการจัดเก็บและเบิกจ่ายเครื่องมือและอุปกรณ์ การรับของเบิกของ การจดบันทึกตกหล่น ของสูญหาย เมื่อเบิกของไปแล้วมีการยืมส่งต่อ โดยไม่มีการจดบันทึก และไม่สามารถยืนยันตัวตน ผู้เบิกจ่ายผู้ยืมได้ ทั้งหมดที่กล่าวมาจึงเป็นปัจจัยที่สำคัญ ที่ทำให้ผู้พัฒนาจึงได้ มีแนวคิดเพื่อที่จะแก้ปัญหานี้ ด้วยการประมวลผลภาพและ การวิเคราะห์ภาพเพื่อการจัดการข้อมูลตโนมัติ ในสารนิพนธ์นี้จะออกแบบและพัฒนาระบบประมวลผลภาพของคอมพิวเตอร์เทคโนโลยีปัญญาประดิษฐ์ ที่สามารถคำนวณวิเคราะห์ภาพได้ ในคำนวณวิเคราะห์ภาพของวัตถุจะใช้กล้อง IP Cameras, software YOLOv8 และเซนเซอร์ต่างๆ

    </p>
    <a href="/">MyHome</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">เดือน</th>
      </tr>
      <tr>
        <th>ขั้นตอน</th>
        <th>ตุลาคม</th>
        <th>พฤศจิกายน</th>
        <th>ธันวาคม</th>
        <th>มกราคม</th>
        <th>กุมภาพันธ์</th>
        <th>มีนาคม</th>
        <th>เมษายน</th>
        <th>พฤษภาคม</th>
      </tr>
      <tr>
        <td>ศึรวบรวมรูปภาพและข้อมูลที่เกี่ยวข้องกับเครื่องมือและอุปกรณ์ในคลัง สร้างฐานข้อมูลรูปภาพที่หลากหลายสำหรับการฝึกโมเดล YOLOv8</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทำการแปลงและทำความสะอาดข้อมูลรูปภาพเพื่อให้พร้อมสำหรับการฝึกโมเดลการตรวจจับวัตถุ</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>เริ่มการฝึกโมเดล YOLOv8 ด้วยชุดข้อมูลที่เตรียมไว้</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ติดตามและบันทึกประสิทธิภาพของโมเดลในแต่ละรอบของการฝึก</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบโมเดล YOLOv8 กับข้อมูลรูปภาพใหม่ที่ไม่เคยใช้ในการฝึก</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ประเมินผลการตรวจจับวัตถุและบันทึกข้อดีข้อเสียของโมเดล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบการทำงานและบันทึกผล</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <td>ประเมินผลการทดลอง และ สรุป</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
      </tr>
    </table>  
    <a href="/">MyHome</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "ศึรวบรวมรูปภาพและข้อมูลที่เกี่ยวข้องกับเครื่องมือและอุปกรณ์ในคลัง สร้างฐานข้อมูลรูปภาพที่หลากหลายสำหรับการฝึกโมเดล YOLOv8",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "ทำการแปลงและทำความสะอาดข้อมูลรูปภาพเพื่อให้พร้อมสำหรับการฝึกโมเดลการตรวจจับวัตถุ",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "เริ่มการฝึกโมเดล YOLOv8 ด้วยชุดข้อมูลที่เตรียมไว้",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "ติดตามและบันทึกประสิทธิภาพของโมเดลในแต่ละรอบของการฝึก",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "ทดสอบโมเดล YOLOv8 กับข้อมูลรูปภาพใหม่ที่ไม่เคยใช้ในการฝึก",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "ประเมินผลการตรวจจับวัตถุและบันทึกข้อดีข้อเสียของโมเดล",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
    {
      id: 7,
      description: "ทดสอบการทำงานและบันทึกผล",
      startDate: "2024-04-01",
      endDate: "2024-04-30"
    },
    {
      id: 8,
      description: "ประเมินผลการทดลอง และ สรุป",
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080);