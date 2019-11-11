import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'Administrator (wolfcom)',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-19-2018 14:27:10',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'FREE',
    type:'TIME',
    storage:'N/A',
    price:'$0.00',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Low',
    status:'Open'
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:52',
    organization: 'Wolfcom',
    subscription:'BASIC',
    type:'STORAGE',
    storage:'1GB',
    price:'$99.99',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'High',
    status:'Closed'
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '1.76 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:37',
    organization: 'Wolfcom',
    subscription:'ENTERPRISE',
    type:'STORAGE',
    storage:'10GB',
    price:'$199.99',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Medium',
    status:'Open'
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:35',
    organization: 'Wolfcom',
    subscription:'BASIC',
    type:'STORAGE',
    storage:'1GB',
    price:'$9.99',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'High',
    status:'Closed'
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:19',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'ON-DEMAND',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.99',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'High',
    status:'Open'
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:15:27',
    organization: 'Wolfcom',
    subscription:'PRO',
    type:'STORAGE',
    storage:'5GB',
    price:'$199.99',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Medium',
    status:'Closed'
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'REDACTED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:09',
    organization: 'Wolfcom',
    subscription:'ENTERPRISE',
    type:'STORAGE',
    storage:'10GB',
    price:'$299.99',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'High',
    status:'Open'
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:14',
    organization: 'Wolfcom',
    subscription:'BASIC',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.99',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Low',
    status:'Open'
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'REDACTED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:16',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'PRO',
    type:'STORAGE',
    storage:'5GB',
    price:'$199.99',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Medium',
    status:'Open'
    
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:35',
    organization: 'Wolfcom',
    subscription:'ENTERPRISE',
    type:'STORAGE',
    storage:'10GB',
    price:'$299.99',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Low',
    status:'Closed'
   
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mark',
    email: 'mark@gmail.com',
    age: '38',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 11:23:19',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'ON-DEMAND',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.99',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Medium',
    status:'Open'
  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@jacob',
    email: 'jacob@yandex.ru',
    age: '48',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'UPLOADED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-15-2018 09:52:5',
    organization: 'Wolfcom',
    subscription:'ON-DEMAND',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.99',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'High',
    status:'Closed'
  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    username: '@haik',
    email: 'haik@outlook.com',
    age: '48',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'REDACTED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-13-2018 15:40:17',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'FREE',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.00',
    isPayment:'true',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'High',
    status:'Open'
  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    username: '@garegin',
    email: 'garegin@gmail.com',
    age: '40',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'REDACTED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-13-2018 15:39:32',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'FREE',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.00',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Low',
    status:'Open'
  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    username: '@krikor',
    email: 'krikor@yandex.ru',
    age: '32',
    dateTime: '11-16-2018 11:10:01',
    action: 'Purge File',
    device: 'BodyCam-006539-20180709-100828',
    file: 'VIDEOS',
    user: 'SYSTEM',
    ipAddress: '192.168.1.200/32',
    lastActive: '11-16-2018 04:23:38',
    subject: 'Bug issue',
    feedbackType: 'Bug Report',
    fileStatus: 'REDACTED',
    fileSize: '10.26 MB',
    duration: '12:01:09',
    lastModifiled: '12-11-2018  04:26:48',
    uploadedDate: 'Nov-13-2018 15:29:30',
    organization: 'Wolfcom',
    isActive:'true',
    subscription:'FREE',
    type:'STORAGE',
    storage:'1GB',
    price:'$0.00',
    paymentId:'PAY-12346ASDFRT',
    paymentMethod:'SDF-35698-RTYU-1569',
    state:'Overdue',
    groupAgent:'Admin/Wolfcom',
    priority:'Low',
    status:'Open'
  },];

  getData() {
    return this.data;
  }
}
