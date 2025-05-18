package br.com.projetoMarajoara.Service;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class EventoService {

    @Autowired private EmployeeRepository empRepo;

    public List<Employee> getAllEmployee()
    {
        return empRepo.findAll();
    }
    public void save(Employee employee, MultipartFile image) throws IOException
    {
        employee.setImageName(image.getOriginalFilename());
        employee.setImageType(image.getContentType());
        employee.setImageData(image.getBytes());
        empRepo.save(employee);
    }
    public void save(Employee employee)
    {
        empRepo.save(employee);
    }

    public void saveButkeepImage(Employee employee, Employee oldEmployee)
    {
        employee.setImageName(oldEmployee.getImageName());
        employee.setImageType(oldEmployee.getImageType());
        employee.setImageData(oldEmployee.getImageData());
        empRepo.save(employee);
    }
    public Employee getById(Long id)
    {
        Optional<Employee> optional = empRepo.findById(id);
        Employee employee = null;
        if (optional.isPresent())
            employee = optional.get();
        else
            throw new RuntimeException(
                    "Employee not found for id : " + id);
        return employee;
    }
    public void deleteViaId(long id)
    {
        empRepo.deleteById(id);
    }
}