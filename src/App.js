// import './App.css';
import Card from './components/Card';

function App() {
  let plans = [
    {
      plan: 'FREE',
      price: '$0',
      user: 'Single User',
      userEnabler: true,
      storage: '5GB Storage',
      storageEnabler: true,
      publicProject: 'Unlimited Public Projects',
      pubProjectEnabler: true,
      communityAccess: 'Community Access',
      communityEnabler: true,
      privateProject: 'Unlimited Private Projects',
      priProjectEnabler: false,
      phoneSupport: 'Dedicated Phone Support',
      phoneEnabler: false,
      subDomain: 'Free Subdomain',
      domainEnabler: false,
      reports: 'Monthly Status Reports',
      reportsEnabler: false
    },
    {
      plan: 'PLUS',
      price: '$9',
      user: '5 Users',
      userEnabler: true,
      storage: '50GB Storage',
      storageEnabler: true,
      publicProject: 'Unlimited Public Projects',
      pubProjectEnabler: true,
      communityAccess: 'Community Access',
      communityEnabler: true,
      privateProject: 'Unlimited Private Projects',
      priProjectEnabler: true,
      phoneSupport: 'Dedicated Phone Support',
      phoneEnabler: true,
      subDomain: 'Free Subdomain',
      domainEnabler: true,
      reports: 'Monthly Status Reports',
      reportsEnabler: false

    },
    {
      plan: 'PRO',
      price: '$49',
      user: 'Unlimited Users',
      userEnabler: true,
      storage: '150GB Storage',
      storageEnabler: true,
      publicProject: 'Unlimited Public Projects',
      pubProjectEnabler: true,
      communityAccess: 'Community Access',
      communityEnabler: true,
      privateProject: 'Unlimited Private Projects',
      priProjectEnabler: true,
      phoneSupport: 'Dedicated Phone Support',
      phoneEnabler: true,
      subDomain: 'Free Subdomain',
      domainEnabler: true,
      reports: 'Monthly Status Reports',
      reportsEnabler: true

    }

  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <Card data={plans[0]} />
          <Card data={plans[1]} />
          <Card data={plans[2]} />
        </div>
      </div>
    </section>
  )
}

export default App;
