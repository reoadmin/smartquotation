
// Add 4-second delay before showing the main content
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }, 4000);
};
// Navigation function for the panels
function nextPanel(panelNumber) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.style.display = 'none'); // Hide all panels
    document.getElementById('panel' + panelNumber).style.display = 'block'; // Show the selected panel
}

// Function to generate a quotation and display it
function generateQuotation() {
    // Get values from input fields
    const clientName = document.getElementById('clientName').value;
    const companyName = document.getElementById('companyName').value;
    const businessDetails = document.getElementById('businessDetails').value;
    const serviceDescription = document.getElementById('serviceDescription').value;
    const price = document.getElementById('price').value;
    const quotationNumber = document.getElementById('quotationNumber').value;
    const quoteExpiryDate = document.getElementById('quoteExpiryDate').value;
    const quotationDate = document.getElementById('quotationDate').value;
    const projectSchedule = document.getElementById('projectSchedule').value;
    const termsConditions = document.getElementById('termsConditions').value;
    const termsPayment = document.getElementById('termsPayment').value;
    const customerSignature = document.getElementById('customerSignature').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const revisions = document.getElementById('revisions').value;

    // Update the output section with the values
    document.getElementById('outputClientName').innerText = clientName;
    document.getElementById('outputCompanyName').innerText = companyName;
    document.getElementById('outputBusinessDetails').innerText = businessDetails;
    document.getElementById('outputServiceDescription').innerText = serviceDescription;
    document.getElementById('outputPrice').innerText = price;
    document.getElementById('outputQuotationNumber').innerText = quotationNumber;
    document.getElementById('outputQuoteExpiryDate').innerText = quoteExpiryDate;
    document.getElementById('outputQuotationDate').innerText = quotationDate;
    document.getElementById('outputProjectSchedule').innerText = projectSchedule;
    document.getElementById('outputTermsConditions').innerText = termsConditions;
    document.getElementById('outputTermsPayment').innerText = termsPayment;
    document.getElementById('outputCustomerSignature').innerText = customerSignature;
    document.getElementById('outputEmailAddress').innerText = emailAddress;
    document.getElementById('outputRevisions').innerText = revisions;

    // Show the quotation output section
    document.getElementById('quotationOutput').style.display = 'block';
    alert("Quotation generated!");
}

// Function to print the quotation
function printQuotation() {
    window.print();
}
