
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if(!hasMeeting) {
    const meetingDetails = {
      name: 'Marketing meeting',
      location: 'Skype',
      time: '1:00 PM'
    }
    resolve(meetingDetails);
  }
  else {
    reject(new Error('Meeting already scheduled'));
  }
});

const addToCalendar = (meetingDetails) => {
  return new Promise((resolve, reject) => {
    const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    resolve(calendar);
  })
}

meeting
  .then(res => {
    console.log('Meeting scheduled');
    console.log(res);
  })
  .catch(err => {
    console.log(err.message);
  })