
import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFull from './components/StateFull/StateFull'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data => {
console.log('sign up', data);

  }
  const handleUpdateProfile = data => {
console.log('update profile', data);

  }
git 
  return (
    <>

      <h1>Form Master</h1>
 {/* <SimpleForm></SimpleForm> */}
 {/* <StateFull></StateFull> */}
{/* <RefForm></RefForm> */}
{/* <HookForm></HookForm> */}
<ReuseableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}> <div>
  <h2>Sign UP</h2>
  <p>please sign up right now</p>
  </div> </ReuseableForm>
<ReuseableForm handleSubmit={handleUpdateProfile} formTitle={'Profile update'} submitBtnText='Update'>
<div>
<h2>Update Profile</h2>
<p>Always keep your profile updated</p>
</div>

</ReuseableForm>


    </>
  )
}

export default App
