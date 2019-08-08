import tap from 'tap'
import getOrganisation from '../../test-asset-generator/engines/organisation-engine'

const organisation = getOrganisation('Raptors and Reptiles')
const organisation2 = getOrganisation('Pterodactyl Laboratories')

/**
 * Check Organisation info
 */
tap.equal(organisation.Name, 'Raptors and Reptiles')
tap.equal(organisation.Email, 'regaffairs@randrplc.co.uk')
tap.equal(organisation.OrganisationReference, '10347')

/**
 * Check Organisation2 info
 */
tap.equal(organisation2.Name, 'Pterodactyl Laboratories')
tap.equal(organisation2.Email, 'regaffairs@ptl.com')
tap.equal(organisation2.OrganisationReference, '02000')


/**
 * Check Authorisations
 */
tap.equal(organisation.MarketingAuthorisations.length, 3)
tap.equal(organisation.MarketingAuthorisations[0].MarketingAuthorisationNumber, '10347/4036')
tap.equal(organisation.MarketingAuthorisations[1].MarketingAuthorisationNumber, '10347/4037')
tap.equal(organisation.MarketingAuthorisations[2].MarketingAuthorisationNumber, '10347/4021')

/**
 * Check Org2 Authorisations
 */
tap.equal(organisation2.MarketingAuthorisations.length, 3)
