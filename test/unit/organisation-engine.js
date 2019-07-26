import tap from 'tap'
import getOrganisation from '../../test-asset-generator/engines/organisation-engine'

const organisation = getOrganisation('Raptors and Reptiles')

/**
 * Check Organisation info
 */
tap.equal(organisation.Name, 'Raptors and Reptiles')
tap.equal(organisation.Email, 'regaffairs@randrplc.co.uk')
tap.equal(organisation.OrganisationReference, '10347')

/**
 * Check Authorisations
 */
tap.equal(organisation.MarketingAuthorisations.length, 3)
tap.equal(organisation.MarketingAuthorisations[0].MarketingAuthorisationNumber, '10347/4036')
tap.equal(organisation.MarketingAuthorisations[1].MarketingAuthorisationNumber, '10347/4037')
tap.equal(organisation.MarketingAuthorisations[2].MarketingAuthorisationNumber, '10347/4021')
